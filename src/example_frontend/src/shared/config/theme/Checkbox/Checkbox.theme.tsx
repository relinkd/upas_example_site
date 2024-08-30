import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiCheckbox = (theme: Theme): ComponentsOverrides['MuiCheckbox'] => {
  return {
    root: {
      marginLeft: 0,
      padding: 0,
      height: '100%',
      width: '100%',
      maxHeight: 24,
      maxWidth: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    colorPrimary: {},
  };
};

export const getMuiCheckboxDefaultProps = (): ComponentsProps['MuiCheckbox'] => ({
  disableRipple: true,
  color: 'primary',
});
