import { Stack, Button, Typography, Box } from '@mui/material';
import { useShallowSelector, COLOR_PURPURE, COLOR_WH, COLOR_BLACK, GradientButtonWraper, BORDER_RADIUS_M, COLOR_LIGHTER_GRAY } from 'shared';
import { userModel } from 'entities/user';
import { idlFactory } from '../../../declarations/achievement';
import { createActorContext , useAuth } from "@ic-reactor/react";
import { Principal } from '@dfinity/principal';
import { useEffect } from 'react';
import AchievementIcon from './assets/icon.svg?react';

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
    const { data: hash, call: refetchHash }: { data: any, call: any} = useQueryCall({
      functionName: "getPrincipalToHashValue",
      args: [
        identity?.getPrincipal()
      ]
    })
    const { data: eligible, call: fetchEligigble }: { data: any, call: any} = useUpdateCall({
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

    useEffect(() => {
      (async () => {
        await fetchEligigble();
      })()
    }, [])

    console.log(hash, 'hash');

    const isAchievementReceived = postMessage?.type === 'RECEIVED_ACHIEVEMENT' || (hash?.Ok && !postMessage?.type);
   
    let status = '';

    if(!eligible) {
        status = 'Loading eligibility'
    } else if(isAchievementReceived) {
      status = 'Achievement Received'
    } else if(eligible?.Ok && !identity_wallet) {
        status = 'Select Identity Wallet'
    } else if (eligible?.Ok && identity_wallet) {
        status = 'Receive Achievement'
    } else {
        status = 'Not eligible'
    }

    const sendMessage = () => {
      const popup = window.open(import.meta.env.VITE_UPAS_HUB, "_blank");

      console.log('message sent')
      
      setTimeout(() => {
        if (popup) {
          popup.postMessage({payload: '', type: 'SELECT_IDENTITY', reputation_requester: window.location.origin, achievement: process.env.CANISTER_ID_ACHIEVEMENT, reputation_module: process.env.CANISTER_ID_REPUTATION_MODULE}, import.meta.env.VITE_UPAS_HUB);
        } else {
          return
        } 
      }, 2000);
    }

    const generateHashFunc = async () => {
        const result = await generateHash();
        console.log(result);

        const popup = window.open(import.meta.env.VITE_UPAS_HUB, "_blank");
      
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
        <Box sx={{ 
          width: "600px", 
          background: COLOR_WH, 
          padding: '20px 30px', 
          borderRadius: BORDER_RADIUS_M,
          boxShadow: '0px 0px 20px -15px #635D95',
          border: `1px solid ${COLOR_LIGHTER_GRAY}`,
          paddingBottom: 5,
          paddingTop: 5
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 8,
            justifyContent: 'space-evenly'
          }}>
            <Box sx={{ flex: '0 0 auto', marginRight: 3 }}>
              <AchievementIcon width="91" height="91" />
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: COLOR_BLACK, 
                  marginBottom: 1,
                  fontWeight: 'bold'
                }}
              >
                UPAS Early Adopter
              </Typography>
              <Typography>
                Send a message to the feed and receive your "Early UPAS Adopter" achievement
              </Typography>
            </Box>
          </Box>
          <Button 
            disabled={isAchievementReceived} 
            variant="contained" 
            fullWidth
            sx={{
              backgroundColor: COLOR_PURPURE,
              color: COLOR_WH,
              padding: '10px 20px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: COLOR_PURPURE,
                opacity: 0.9,
              },
              '&:disabled': {
                backgroundColor: COLOR_LIGHTER_GRAY,
                color: COLOR_BLACK
              }
            }} 
            onClick={() => {
              if(isAchievementReceived) return
              if(eligible?.Ok && !identity_wallet) sendMessage();
              else if(eligible?.Ok && identity_wallet) generateHashFunc();
            }}
          >
            {status}
          </Button>
        </Box>
      </Stack>
    );
}