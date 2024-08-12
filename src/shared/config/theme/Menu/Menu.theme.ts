import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { BORDER_RADIUS_XL } from 'shared/config/theme/common';

export const getMuiMenuOverrides = (theme: Theme): ComponentsOverrides['MuiMenu'] => ({
  paper: {
    backgroundColor: theme.themeColors.colorBlack,
    border: 'none',
    borderRadius: BORDER_RADIUS_XL,
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(3.25, 2.5),
  },
  list: {
    padding: 0,
  },
});

export const getMuiMenuItemOverrides = (theme: Theme): ComponentsOverrides['MuiMenuItem'] => ({
  root: {
    color: theme.themeColors.colorWh,
    padding: theme.spacing(2),

    '&.noPadding': {
      padding: 0,
    },

    '& + &': {
      marginTop: theme.spacing(1),
    },
    borderRadius: '11px',
    '&:hover': {
      background: theme.themeColors.colorDark,
    },

    '&.Mui-selected': {
      backgroundColor: theme.themeColors.colorDark,

      '&:hover': {
        background: theme.themeColors.colorDark,
      },
    },
  },
});

export const getMuiMenuItemDefaultProps = (): ComponentsProps['MuiMenuItem'] => ({
  disableRipple: true,
});
