import { FC } from 'react';
import { Routes } from 'react-router-dom';

import { appRoutes } from './routes';
import { getRoutes } from './utils';

export const RouteManager: FC = () => {
  return appRoutes ? <Routes>{getRoutes(appRoutes)}</Routes> : null;
};
