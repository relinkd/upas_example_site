import { FC, PropsWithChildren } from 'react';
import { canisterId as feedBackendCanisterId, idlFactory as feedBackendIdlFactory } from '../../../declarations/example_backend';
import { createActorContext } from "@ic-reactor/react";

export const {
  ActorProvider: FeedBackendProvider,
  useActorState: useFeedBackendState,
  useMethod: useFeedBackendMethod,
  useQueryCall: useFeedBackendQueryCall,
  useUpdateCall: useFeedBackendUpdateCall,
} = createActorContext<any>({
  idlFactory: feedBackendIdlFactory,
  withDevtools: true,
});

export const WithFeedBackendProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FeedBackendProvider canisterId={feedBackendCanisterId}>
      {children}
    </FeedBackendProvider>
  );
};