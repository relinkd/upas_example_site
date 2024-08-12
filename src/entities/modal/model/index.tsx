import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from 'app/store';

import { EmptyModalPayload } from '../ui';

export enum Modals {
  EmptyModal = 'EmptyModal',
}

export type ModalPayload = EmptyModalPayload;

export type ModalState = {
  modal: ModalPayload | null;
};

export const initialState: ModalState = {
  modal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state: ModalState, action: PayloadAction<ModalState['modal']>) {
      state.modal = action.payload;
    },

    closeModal(state: ModalState) {
      state.modal = null;
    },
  },
});

export const { reducer } = modalSlice;
export const { actions: modalActions } = modalSlice;

export const modalSelector = (state: State): ModalState => state.modal;
