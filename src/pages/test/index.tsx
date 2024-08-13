import { Stack, Button } from '@mui/material';
import { useRef, useEffect } from 'react';
import { Layout } from 'widgets';
import { useAuth } from '@ic-reactor/react';
import { Achievement } from 'features';

export const TestPage = () => {

  const ref = useRef<HTMLIFrameElement | undefined>();
  const { identity } = useAuth()

  console.log(identity?.getPrincipal()?.toText());
 
  const sendMessage = () => {
    const popup = window.open("http://localhost:5173/", "receiver", "width=400,height=400");
    
    setTimeout(() => {
      if (popup) {
        popup.postMessage({payload: '', type: 'SELECT_IDENTITY'}, "http://localhost:5173");
      } else {
        return
      } 
    }, 4000);
  }

  return (
    <Layout>
      <Stack flexDirection="column" alignItems="center" width={1} maxWidth={1}>
        <Achievement canisterId='ctiya-peaaa-aaaaa-qaaja-cai'/>
      </Stack>
    </Layout>
  );
};
