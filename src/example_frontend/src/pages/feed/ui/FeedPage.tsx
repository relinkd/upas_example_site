import React, { useEffect } from 'react';
import { Layout } from 'widgets';
import { useFeedBackendQueryCall } from '../../../app/providers/with-feed-backend';
import { Typography, Box, Stack, List, ListItem, ListItemText, Divider } from '@mui/material';
import { COLOR_PURPURE, COLOR_WH, BORDER_RADIUS_M } from 'shared';

export const FeedPage: React.FC = () => {
  const { data: fetchedMessages, call: getMessages }: { data: any, call: any } = useFeedBackendQueryCall({
    functionName: "getMessages",
    args: [BigInt(0), BigInt(100)],
  });

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Layout>
      <Stack sx={{
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <Typography sx={{ textAlign: 'center' }} width={1} variant='h2'>Message Feed</Typography>

        <Box sx={{ 
          width: "600px", 
          background: COLOR_WH, 
          padding: '20px', 
          borderRadius: BORDER_RADIUS_M,
          marginTop: 5
        }}>
          {fetchedMessages && fetchedMessages.length > 0 ? (
            <List>
              {fetchedMessages.map((msg: any, index: number) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={msg.message}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Author: 
                          </Typography>
                          {` ${msg.author}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  {index < fetchedMessages?.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
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