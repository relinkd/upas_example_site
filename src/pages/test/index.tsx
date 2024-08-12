import { Stack, Button } from '@mui/material';
import { useRef, useEffect } from 'react';
import { Layout } from 'widgets';

export const TestPage = () => {

  const ref = useRef<HTMLIFrameElement | undefined>();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:5173") {
        return;
      }

      console.log('Received message:', event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

 
  const sendMessage = () => {
    const popup = window.open("http://localhost:5173/", "receiver", "width=400,height=400");
    
    setTimeout(() => {
      if (popup) {
        popup.postMessage({payload: 'test', type: 'SELECT_IDENTITY'}, "http://localhost:5173");
        console.log('Message have sent');
      } else {
        return
      } 
    }, 4000);
  }

  return (
    <Layout>
      <Stack flexDirection="column" alignItems="center" width={1} maxWidth={1}>
        <Button variant="contained" sx={{
          backgroundColor: 'green'
        }} onClick={() => {
          sendMessage()
        }}>Get achievement</Button>
      </Stack>
    </Layout>
  );
};
