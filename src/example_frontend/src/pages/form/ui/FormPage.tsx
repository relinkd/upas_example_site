import React, { useState, useEffect } from 'react';
import { Layout } from 'widgets';
import { useFeedBackendUpdateCall, useFeedBackendQueryCall } from '../../../app/providers/with-feed-backend';
import { TextField, Button, Typography, Box, Stack } from '@mui/material';
import { COLOR_PURPURE, COLOR_WH, COLOR_BLACK, GradientButtonWraper, BORDER_RADIUS_M } from 'shared';
import { getToastMessage } from 'shared/lib';
import { useAuth } from "@ic-reactor/react";
import { HeaderText } from 'features';

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
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <GradientButtonWraper sx={{ borderRadius: BORDER_RADIUS_M, marginTop: 10 }}>
          <Box sx={{ 
            width: "400px", 
            background: COLOR_WH, 
            padding: '20px', 
            borderRadius: BORDER_RADIUS_M 
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
                <Button 
                  type="submit"
                  variant="contained"
                  disabled={isPosted}
                  sx={{
                    backgroundColor: COLOR_PURPURE,
                    marginTop: 2,
                    width: '100%',
                    '&:hover': {
                      color: COLOR_WH
                    },
                    '&:disabled': {
                      color: COLOR_BLACK
                    }
                  }}
                >
                  Submit Message
                </Button>
              </Box>
            )}
            {isPosted && (
              <Typography sx={{ textAlign: 'center', marginTop: 2, color: COLOR_PURPURE }}>
                Your message has been sent and recorded on the blockchain.
              </Typography>
            )}
          </Box>
        </GradientButtonWraper>
      </Stack>
    </Layout>
  );
};