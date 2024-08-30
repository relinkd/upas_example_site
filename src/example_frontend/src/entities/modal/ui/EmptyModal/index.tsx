import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { Modal, modalModel } from 'entities/modal';

export interface EmptyModalPayload {
  type: modalModel.Modals.EmptyModal;
  data?: null;
}

export const EmptyModal = forwardRef<HTMLElement, Modal>(() => {
  return <Box />;
});

EmptyModal.displayName = 'EmptyModal';
