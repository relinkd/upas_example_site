import { FC, PropsWithChildren } from 'react';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import { idlFactory, canisterId } from '../../../declarations/indexer';

export const WithICConnect: FC<PropsWithChildren> = ({ children }) => {
  return (
  <AgentProvider withProcessEnv>
    <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
      {children}
    </ActorProvider>
  </AgentProvider>
  );
};
