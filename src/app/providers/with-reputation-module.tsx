import { FC, PropsWithChildren } from 'react';
import { canisterId as reputationCanisterId, idlFactory as moduleIdlFactory } from '../../../declarations/reputation_module';
import { createActorContext } from "@ic-reactor/react";

export const {
    ActorProvider: ReputationProvider,
    useActorState: useReputationState,
    useMethod: useReputationMethod,
    useQueryCall: useReputationQueryCall,
    useUpdateCall: useReputationUpdateCall,
  } = createActorContext<any>({
    idlFactory: moduleIdlFactory,
    withDevtools: true,
})

export const WithReputationProvider: FC<PropsWithChildren> = ({ children }) => {
  return(
    <ReputationProvider canisterId={reputationCanisterId}>
        {children}
    </ReputationProvider>
  )
};
