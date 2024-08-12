import { createSelector } from '@reduxjs/toolkit';
import { State } from 'app/store';

const getUser = (state: State) => state.user;

const selectIssuers = createSelector(getUser, ({ issuers }) => ({
  issuers
}));

export const selectors = {
  getUser,
  selectIssuers,
};
