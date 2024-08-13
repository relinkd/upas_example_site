import { Stack, Button } from '@mui/material';
import { useShallowSelector } from 'shared';
import { userModel } from 'entities/user';
import { idlFactory } from '../../../declarations/achievement';
import { createActorContext , useAuth } from "@ic-reactor/react";

export const Achievement = ({ canisterId }: { canisterId: string}) => {
    const {
        ActorProvider: AchievementProvider,
        useActorState: useAchievementState,
        useMethod: useAchievementMethod,
        useQueryCall: useAchievementQueryCall,
        useUpdateCall: useAchivementUpdateCall,
      } = createActorContext<any>({
        canisterId,
        idlFactory,
        withDevtools: true,
      })
      
      return (
        <AchievementProvider>
            <AchievementInner useQueryCall={useAchievementQueryCall} />
        </AchievementProvider>
      )
};

export const AchievementInner = ({ useQueryCall }: { useQueryCall: any}) => {
    const { identity } = useAuth();
    const { identity_wallet } = useShallowSelector(userModel.selectors.getUser);
    
    const { data: eligible, call: fetchEligigble }: { data: any, call: any} = useQueryCall({
        functionName: "checkAchievementEligibility",
        args: [
            identity?.getPrincipal(),
            []
        ]
    })
   
    console.log(eligible, 'achievement eligible')

    const sendMessage = () => {
      const popup = window.open("http://localhost:5173/", "receiver", "width=1000,height=500");
      
      setTimeout(() => {
        if (popup) {
          popup.postMessage({payload: '', type: 'SELECT_IDENTITY'}, "http://localhost:5173");
        } else {
          return
        } 
      }, 4000);
    }

    return (
        <Button variant="contained" sx={{
          backgroundColor: 'green'
        }} onClick={() => {
          if(!identity_wallet) sendMessage();


        }}>Get achievement</Button>
  );
}