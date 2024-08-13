import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssuerTuple } from 'shared';

export type UserState = {
  issuers: IssuerTuple[]
  postMessage: {
    type: String
    data: String
  } | undefined
  identity_wallet: String | undefined
};

const initialUserState: UserState = {
  issuers: [],
  postMessage: undefined,
  identity_wallet: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    updateUserState: (state: UserState, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),

    clearUserState: () => ({
      ...initialUserState,
    }),

    /** For saga */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    getUserInfo(state, action: PayloadAction) {},
  },
});

export const { reducer } = userSlice;
export const { actions: userActions } = userSlice;
