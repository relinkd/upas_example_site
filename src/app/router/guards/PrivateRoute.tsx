import { Navigate } from 'react-router-dom';
import { routes, useShallowSelector } from 'shared';
import { useAuth } from '@ic-reactor/react';

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export const PrivateRoute = ({ outlet }: ProtectedRouteProps) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to={routes.connect.path} replace />;
  }

  return outlet;
};
