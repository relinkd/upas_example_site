export interface RouteProps {
  path: string;
  isProtected?: boolean;
  component: JSX.Element;
}

export interface RoutesProps {
  [k: string]: RouteProps;
}
