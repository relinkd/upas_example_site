import { TestPage, ConnectPage, FeedPage, FormPage } from 'pages';

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
  },
  feed: {
    path: '/feed',
    component: <FeedPage />,
    isProtected: true
  },
  form: {
    path: '/form',
    component: <FormPage />,
    isProtected: true
  }
};
