import { FC, PropsWithChildren } from 'react';
import { persistor } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';

export const withPersistor: FC<PropsWithChildren> = ({ children }) => (
  <PersistGate persistor={persistor} loading={null}>
    {children}
  </PersistGate>
);
