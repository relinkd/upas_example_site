import { Stack, Button } from '@mui/material';
import { useShallowSelector } from 'shared';
import { userModel } from 'entities/user';
import { idlFactory } from '../../../declarations/achievement';
import { createActorContext , useAuth } from "@ic-reactor/react";
import { Principal } from '@dfinity/principal';

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
            <AchievementInner useQueryCall={useAchievementQueryCall} useUpdateCall={useAchivementUpdateCall} />
        </AchievementProvider>
      )
};

export const AchievementInner = ({ useQueryCall, useUpdateCall }: { useQueryCall: any, useUpdateCall: any}) => {
    const { identity } = useAuth();
    const { identity_wallet } = useShallowSelector(userModel.selectors.getUser);

    const { data: eligible, call: fetchEligigble }: { data: any, call: any} = useQueryCall({
        functionName: "checkAchievementEligibility",
        args: [
            identity?.getPrincipal(),
            []
        ]
    })

    const { call: generateHash }: { call: any} = useUpdateCall({
        functionName: "generateHashToIdentityWallet",
        args: [
            Principal.fromText(identity_wallet as string || identity!.getPrincipal()!.toText()),
            []
        ]
    })
   
    let status = '';

    if(!eligible) {
        status = 'Loading eligibility'
    } else if(eligible?.Ok && !identity_wallet) {
        status = 'Select Identity Wallet'
    } else if (eligible?.Ok && identity_wallet) {
        status = 'Receive Achievement'
    } else {
        status = 'Not eligible'
    }

    const sendMessage = () => {
      const popup = window.open("http://localhost:5173/", "receiver", "width=1000,height=500");
      
      setTimeout(() => {
        if (popup) {
          popup.postMessage({payload: '', type: 'SELECT_IDENTITY'}, "http://localhost:5173");
        } else {
          return
        } 
      }, 2000);
    }

    const generateHashFunc = async () => {
        const result = await generateHash();
        console.log(result);

        const popup = window.open("http://localhost:5173/", "receiver", "width=1000,height=500");
      
        setTimeout(() => {
            if (popup) {
            popup.postMessage({payload: identity?.getPrincipal()?.toText(), type: 'SIGN_SIGNATURE', achievement: 'ctiya-peaaa-aaaaa-qaaja-cai', reputation_module: 'cuj6u-c4aaa-aaaaa-qaajq-cai'}, "http://localhost:5173");
            } else {
                return
            } 
        }, 2000);
    }

    return (
        <Button variant="contained" sx={{
          backgroundColor: 'green'
        }} onClick={() => {
          if(eligible?.Ok && !identity_wallet) sendMessage();
          else if(eligible?.Ok && identity_wallet) generateHashFunc();

        }}>{status}</Button>
  );
}