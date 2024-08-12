import { BreakpointsOptions, ComponentsOverrides, ComponentsProps } from '@mui/material';

export const breakpointOptions: BreakpointsOptions = {
  values: {
    xs: 325,
    sm: 600,
    md: 900,
    lg: 1300,
    xl: 1700,
  },
};
export const getMuiGridOverrides = (): ComponentsOverrides['MuiGrid'] => ({});

export const getMuiGridDefaultProps = (): ComponentsProps['MuiGrid'] => ({
  xs: 'auto',
  lineHeight: 0,
});
