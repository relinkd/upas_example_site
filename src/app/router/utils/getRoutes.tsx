import { Route } from 'react-router-dom';

import { PrivateRoute } from '../guards';
import { RoutesProps } from '../types';

export const getRoutes = (routes: RoutesProps) => {
  return Object.values(routes).map(({ path, component, isProtected }) =>
    isProtected ? (
      <Route key={path} path={path} element={<PrivateRoute outlet={component} />} />
    ) : (
      <Route key={path} path={path} element={component} />
    ),
  );
};
