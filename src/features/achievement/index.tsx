import { Stack, Button, Typography } from '@mui/material';
import { useShallowSelector, COLOR_PURPURE, COLOR_WH, COLOR_BLACK, GradientButtonWraper, BORDER_RADIUS_M } from 'shared';
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
    const { identity_wallet, postMessage } = useShallowSelector(userModel.selectors.getUser);
    const isAchievementReceived = postMessage?.type === 'RECEIVED_ACHIEVEMENT';

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
    } else if(isAchievementReceived) {
      status = 'Achievement Received'
    } else if (eligible?.Ok && identity_wallet) {
        status = 'Receive Achievement'
    } else {
        status = 'Not eligible'
    }

    const sendMessage = () => {
      const popup = window.open(import.meta.env.VITE_UPAS_HUB, "receiver", "width=1000,height=500");
      
      setTimeout(() => {
        if (popup) {
          popup.postMessage({payload: '', type: 'SELECT_IDENTITY', reputation_requester: window.location.origin}, import.meta.env.VITE_UPAS_HUB);
        } else {
          return
        } 
      }, 2000);
    }

    const generateHashFunc = async () => {
        const result = await generateHash();
        console.log(result);

        const popup = window.open(import.meta.env.VITE_UPAS_HUB, "receiver", "width=1000,height=500");
      
        setTimeout(() => {
            if (popup) {
            popup.postMessage({payload: identity?.getPrincipal()?.toText(), type: 'SIGN_SIGNATURE', achievement: process.env.CANISTER_ID_ACHIEVEMENT, reputation_module: process.env.CANISTER_ID_REPUTATION_MODULE, reputation_requester: window.location.origin}, import.meta.env.VITE_UPAS_HUB);
            } else {
                return
            } 
        }, 2000);
    }

    return (
      <Stack sx={{
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <Typography sx={{ textAlign: 'center' }} width={1} variant='h2'>Cool ICP Project</Typography>

        <GradientButtonWraper sx={{ borderRadius: BORDER_RADIUS_M, marginTop: 10 }}>
          <Stack width="200px" pt={10} sx={{ background: COLOR_WH, padding: '20px', borderRadius: BORDER_RADIUS_M }}>
            <Typography sx={{ textAlign: 'center' }}>You can check your eligibility and receive achievement "Early Adopter" with this button</Typography>
            <Button disabled={isAchievementReceived} variant="contained" sx={{
              backgroundColor: COLOR_PURPURE,
              marginTop: 5,
              '&:hover': {
                color: COLOR_WH
              },
              '&:disabled': {
                color: COLOR_BLACK
              }
            }} onClick={() => {
              if(eligible?.Ok && !identity_wallet) sendMessage();
              else if(eligible?.Ok && identity_wallet) generateHashFunc();

            }}>{status}</Button>
          </Stack>
        </GradientButtonWraper>
      </Stack>
  );
}