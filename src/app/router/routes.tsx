import { TestPage } from 'pages/test';

import { RoutesProps } from './types';

export const appRoutes: RoutesProps = {
  home: {
    path: '/',
    component: <TestPage />,
  },
};
