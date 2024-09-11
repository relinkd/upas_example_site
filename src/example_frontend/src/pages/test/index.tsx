import { Stack, Button } from '@mui/material';
import { useRef, useEffect } from 'react';
import { Layout } from 'widgets';
import { useAuth } from '@ic-reactor/react';
import { Achievement } from 'features';

export const TestPage = () => {

  const ref = useRef<HTMLIFrameElement | undefined>();
  const { identity } = useAuth()

  console.log(identity?.getPrincipal()?.toText());

  return (
    <Layout headerText="receive achievement">
      <Stack flexDirection="column" alignItems="center" width={1} maxWidth={1}>
        <Achievement canisterId={process.env.CANISTER_ID_ACHIEVEMENT!}/>
      </Stack>
    </Layout>
  );
};
