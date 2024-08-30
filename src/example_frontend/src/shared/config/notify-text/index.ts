import { Chains, ChainType, WalletProviders } from 'shared/config';
import { shortenPhrase } from 'shared/lib';

export const notifyText = {
  wallet: {
    connect: {
      success: (userWalletAddress: string, isShortenPhrase = true) =>
        `Wallet connected: ${isShortenPhrase ? shortenPhrase(userWalletAddress, 3, 3) : userWalletAddress}`,
      info: {
        noExtension: (provider: WalletProviders) => `${provider} extension isn't installed or unlocked`,
        pleaseLogin: 'Please sign login message at MetaMask',
      },
      error: {
        wrongNetwork: (network: Chains, chainType: ChainType) =>
          `You changed to wrong network. Please choose ${network} ${chainType}`,
        defaultError: 'Something went wrong',
      },
    },
    disconnect: {
      info: 'Disconnect from wallet',
    },
  },

  approve: {
    success: 'Successful approve',
    error: 'Error approve',
  },

  claimRewards: {
    success: 'Successfully claimed reward',
    error: 'Unable to claim reward',
  },
};

export const NATIVE_CURRENCY_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
