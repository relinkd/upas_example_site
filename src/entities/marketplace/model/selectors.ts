import { createSelector } from '@reduxjs/toolkit';
import { State } from 'app/store';

const getMarketplace = (state: State) => state.marketplace;

const selectIssuers = createSelector(getMarketplace, ({ issuers }) => ({
  issuers
}));

export const selectors = {
  getMarketplace,
  selectIssuers,
};
