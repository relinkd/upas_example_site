import { FC, PropsWithChildren } from 'react';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import { canisterId as achievementCanisterId, idlFactory } from '../../../declarations/achievement';
import { createActorContext } from "@ic-reactor/react"

export const {
  ActorProvider: AchievementProvider,
  useActorState: useAchievementState,
  useMethod: useAchievementMethod,
  useQueryCall: useAchievementQueryCall,
  useUpdateCall: useAchivementUpdateCall,
} = createActorContext<any>({
  canisterId: achievementCanisterId,
  idlFactory,
  withDevtools: true,
})

export const WithAchievementProvider: FC<PropsWithChildren> = ({ children }) => {
  

  return (
    <AchievementProvider>
      {children}
    </AchievementProvider>
  );
};
