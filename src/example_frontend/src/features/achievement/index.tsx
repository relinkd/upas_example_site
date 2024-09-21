import { Stack, Button, Typography, Box } from '@mui/material';
import { useShallowSelector, COLOR_PURPURE, COLOR_WH, COLOR_BLACK, GradientButtonWraper, BORDER_RADIUS_M, COLOR_LIGHTER_GRAY, BORDER_RADIUS_S } from 'shared';
import { userModel } from 'entities/user';
import { useAuth } from "@ic-reactor/react";
import { Principal } from '@dfinity/principal';
import { useEffect } from 'react';
import AchievementIcon from './assets/icon.svg?react';
import { GradientButton } from 'shared';
import { AchievementProvider, useAchievementQueryCall, useAchievementUpdateCall } from "upas-reputation";

export const Achievement = ({ canisterId }: { canisterId: string}) => {
      return (
        <AchievementProvider canisterId={canisterId}>
            <AchievementInner />
        </AchievementProvider>
      )
};

export const AchievementInner = () => {
    const { identity } = useAuth();
    const { identity_wallet, postMessage } = useShallowSelector(userModel.selectors.getUser);
    const { data: hash, call: refetchHash }: { data: any, call: any} = useAchievementQueryCall({
      functionName: "getPrincipalToHashValue",
      args: [
        identity?.getPrincipal()
      ]
    })
    const { data: eligible, call: fetchEligigble }: { data: any, call: any} = useAchievementUpdateCall({
      functionName: "checkAchievementEligibility",
      args: [
        identity?.getPrincipal(),
        []
      ]
    })
    const { call: generateHash }: { call: any} = useAchievementUpdateCall({
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
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
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
          <GradientButtonWraper sx={{ borderRadius: BORDER_RADIUS_S }}>
            <GradientButton 
              // disabled={isAchievementReceived}
              fullWidth
              onClick={() => {
                if(isAchievementReceived) return
                if(eligible?.Ok && !identity_wallet) sendMessage();
                else if(eligible?.Ok && identity_wallet) generateHashFunc();
              }}
            >
              {status}
            </GradientButton>
          </GradientButtonWraper>
        </Box>
      </Stack>
    );
}