import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal as MuiModal } from '@mui/material';
import { flexHelper } from 'shared';

import { modalActions, ModalPayload, Modals, modalSelector } from '../model';

import { EmptyModal } from './EmptyModal';

export interface Modal<T extends { type: Modals; data: any } = { type: Modals; data: any }> {
  onClose?: () => void;
  data: T['data'];
}

const modalMapping: { [key in keyof typeof Modals]: FC<Modal> } = {
  [Modals.EmptyModal]: EmptyModal,
};

const { closeModal } = modalActions;

export const Modal: FC<{ type: Modals; data: ModalPayload['data'] }> = ({ type, data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && dispatch(closeModal());
    if (type) {
      window.addEventListener('keyup', handleEscape);
    }
    return () => window.removeEventListener('keyup', handleEscape);
  }, [dispatch, type]);

  const ModalComponent = modalMapping[type];

  return (
    <MuiModal
      open={!!type}
      onClose={() => {
        dispatch(closeModal());
      }}
      sx={{ ...flexHelper('center', 'center') }}
    >
      <ModalComponent onClose={closeModal} data={data} />
    </MuiModal>
  );
};

export const ModalContainer = () => {
  const { modal } = useSelector(modalSelector);
  if (!modal) return null;
  return <Modal type={modal.type} data={modal.data} />;
};
