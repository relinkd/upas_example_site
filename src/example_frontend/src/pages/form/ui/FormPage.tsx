import React, { useState, useEffect } from 'react';
import { Layout } from 'widgets';
import { useFeedBackendUpdateCall, useFeedBackendQueryCall } from '../../../app/providers/with-feed-backend';
import { TextField, Typography, Box, Stack } from '@mui/material';
import { COLOR_PURPURE, COLOR_WH, COLOR_BLACK, BORDER_RADIUS_M, COLOR_LIGHTER_GRAY, GradientButtonWraper, BORDER_RADIUS_S } from 'shared';
import { getToastMessage } from 'shared/lib';
import { useAuth } from "@ic-reactor/react";
import { HeaderText } from 'features';
import { GradientButton } from 'shared';

export const FormPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  const { identity } = useAuth();
  const { call: writeMessage } = useFeedBackendUpdateCall({
    functionName: "writeMessage",
  });
  const { data: hasPosted, call: checkHasPosted } = useFeedBackendQueryCall({
    functionName: "getPrincipalToIsPosted",
  });

  useEffect(() => {
    if (identity) {
      checkHasPosted([identity.getPrincipal()]);
    }
  }, [identity]);

  useEffect(() => {
    if (hasPosted) {
      setIsPosted(true);
    }
  }, [hasPosted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await writeMessage([message]);
      setIsPosted(true);
      getToastMessage('success', 'Message submitted successfully!');
    } catch (err: unknown) {
      getToastMessage('error', err instanceof Error ? err.message : 'An error occurred while sending the message.');
    }
  };

  return (
    <Layout headerText="submit your message">
      <Stack sx={{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
      }}>
        <Box sx={{ 
          width: "600px", 
          background: COLOR_WH, 
          padding: '20px 30px', 
          borderRadius: BORDER_RADIUS_M,
          boxShadow: '0px 0px 20px -15px #635D95',
          border: `1px solid ${COLOR_LIGHTER_GRAY}`,
          paddingBottom: 5,
          paddingTop: 5
        }}>
          {isPosted ? (
            <Typography sx={{ textAlign: 'center' }}>Thank you! Your message has been submitted.</Typography>
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
                disabled={isPosted}
                margin="normal"
              />
              <GradientButtonWraper sx={{ borderRadius: BORDER_RADIUS_S, marginTop: 2 }}>
                <GradientButton 
                  type="submit"
                  disabled={isPosted}
                  fullWidth
                >
                  Submit Message
                </GradientButton>
              </GradientButtonWraper>
            </Box>
          )}
          {isPosted && (
            <Typography sx={{ textAlign: 'center', marginTop: 2, color: COLOR_PURPURE }}>
              Your message has been sent and recorded on the blockchain.
            </Typography>
          )}
        </Box>
      </Stack>
    </Layout>
  );
};