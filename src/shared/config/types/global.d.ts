import type { MetaMaskInpageProvider } from '@metamask/providers';

// Web3 Providers
declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
