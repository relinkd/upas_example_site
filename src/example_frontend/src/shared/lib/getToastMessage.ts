import { toast, ToastOptions } from 'react-toastify';

type TypeMessageProps = 'success' | 'error' | 'info' | 'warning';

export const getToastMessage = (typeMessage: TypeMessageProps, message: string, otherProps?: ToastOptions) => {
  return toast(message, { type: typeMessage, ...otherProps });
};
