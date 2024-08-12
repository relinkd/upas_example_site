import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

export const getMuiContainerOverrides = (theme: Theme): ComponentsOverrides['MuiContainer'] => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: 688,
  },
});

export const getMuiContainerDefaultProps = (): ComponentsProps['MuiContainer'] => ({
  maxWidth: false,
  sx: {
    mx: 'auto',
  },
});
