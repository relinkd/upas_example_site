import React, { useEffect } from 'react';
import { Layout } from 'widgets';
import { useFeedBackendQueryCall } from '../../../app/providers/with-feed-backend';
import { Typography, Box, Stack } from '@mui/material';
import { COLOR_PURPURE, COLOR_WH, BORDER_RADIUS_M, COLOR_BLACK, COLOR_LIGHTER_GRAY } from 'shared';

export const FeedPage: React.FC = () => {
  const { data: fetchedMessages, call: getMessages }: { data: any, call: any } = useFeedBackendQueryCall({
    functionName: "getMessages",
    args: [BigInt(0), BigInt(100)],
  });

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Layout headerText="message feed">
      <Stack sx={{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <Box sx={{ 
          width: "600px", 
          background: COLOR_WH, 
          padding: '20px', 
          borderRadius: BORDER_RADIUS_M,
          marginTop: 5,
        }}>
          {fetchedMessages && fetchedMessages.length > 0 ? (
            <Stack spacing={2}>
              {fetchedMessages.map((msg: any, index: number) => (
                <Box
                  key={index}
                  sx={{
                    boxShadow: '0px 0px 20px -15px #635D95',
                    borderRadius: BORDER_RADIUS_M,
                    border: `1px solid ${COLOR_LIGHTER_GRAY}`,
                    p: 2,
                  }}
                >
                  <Typography
                    component="p"
                    variant="body1"
                    color={COLOR_BLACK}
                    fontSize={24}
                    mb={1}
                  >
                    {msg.message}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    color={COLOR_PURPURE}
                  >
                    Author: 
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    color={COLOR_BLACK}
                  >
                    {` ${msg.author}`}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography sx={{ textAlign: 'center', color: COLOR_PURPURE }}>
              No messages yet. Be the first to post!
            </Typography>
          )}
        </Box>
      </Stack>
    </Layout>
  );
};