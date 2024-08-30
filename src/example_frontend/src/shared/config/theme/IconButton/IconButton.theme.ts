import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { BORDER_RADIUS_M } from 'shared/config/theme/common';

export const getMuiIconButtonOverrides = (theme: Theme): ComponentsOverrides['MuiIconButton'] => ({
  root: {
    padding: theme.spacing(1.25),
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS_M,
    color: theme.themeColors.buttonContainedColor,

    '&.rounded': {
      borderRadius: '50%',
    },

    '&.transparent': {
      padding: 0,
      background: 'transparent',
      '&:hover': {
        background: 'transparent',
      },
    },
  },
  sizeLarge: {
    padding: theme.spacing(1.75),
    height: 56,
  },
  colorPrimary: {
    background: theme.themeColors.buttonContainedBackground,
    '&:hover': {
      background: theme.themeColors.buttonContainedSecondaryBackgroundHover,
      color: theme.themeColors.buttonContainedSecondaryColorHover,
      svg: {
        path: {
          stroke: theme.themeColors.buttonContainedSecondaryColorHover,
        },
      },
    },
  },
  colorSecondary: {
    color: theme.themeColors.buttonContainedSecondaryColor,
    background: theme.themeColors.buttonContainedSecondaryBackground,
    '&:hover': {
      background: 'transparent',
      color: theme.themeColors.buttonBorderColor,
      border: `1px solid ${theme.themeColors.buttonBorderColor}`,
    },
  },
});

export const getMuiIconButtonDefaultProps = (): ComponentsProps['MuiIconButton'] => ({
  disableFocusRipple: true,
  disableRipple: true,
  size: 'medium',
  color: 'primary',
});
