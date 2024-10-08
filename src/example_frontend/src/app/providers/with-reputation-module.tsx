import { FC, PropsWithChildren } from 'react';
import { canisterId as reputationCanisterId, idlFactory as moduleIdlFactory } from '../../../declarations/reputation_module';
import { ReputationProvider } from "upas-reputation";


export const WithReputationProvider: FC<PropsWithChildren> = ({ children }) => {
  return(
    <ReputationProvider canisterId={reputationCanisterId}>
        {children}
    </ReputationProvider>
  )
};
