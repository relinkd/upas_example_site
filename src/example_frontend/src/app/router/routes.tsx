import { TestPage } from 'pages/test';
import { ConnectPage } from 'pages/connect';

import { RoutesProps } from './types';

export const appRoutes: RoutesProps = {
  home: {
    path: '/',
    component: <TestPage />,
    isProtected: true
  },
  connect: {
    path: '/connect',
    component: <ConnectPage />
  }
};
