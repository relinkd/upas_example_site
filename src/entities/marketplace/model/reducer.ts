import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssuerTuple } from 'shared';

export type MarketplaceState = {
  issuers: IssuerTuple[]
};

const initialMarketplaceState: MarketplaceState = {
  issuers: []
};

const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState: initialMarketplaceState,
  reducers: {
    updateMarketplaceState: (state: MarketplaceState, action: PayloadAction<Partial<MarketplaceState>>) => ({
      ...state,
      ...action.payload,
    }),

    clearMarketplaceState: () => ({
      ...initialMarketplaceState,
    }),

    /** For saga */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    getMarketplaceInfo(state, action: PayloadAction) {},
  },
});

export const { reducer } = marketplaceSlice;
export const { actions: marketplaceActions } = marketplaceSlice;
