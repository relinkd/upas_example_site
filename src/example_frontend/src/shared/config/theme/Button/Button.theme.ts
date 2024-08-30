import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { BORDER_RADIUS_M, BORDER_RADIUS_S } from 'shared/config';

export const getMuiButtonOverrides = (theme: Theme): ComponentsOverrides['MuiButton'] => ({
  root: {
    padding: theme.spacing(1.5, 2),
    borderRadius: BORDER_RADIUS_M,
    backgroundColor: theme.themeColors.buttonContainedBackground,
    color: theme.themeColors.buttonContainedColor,
    fontSize: 15,
    lineHeight: '18px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    height: 40,
    '&:disabled': {
      color: theme.themeColors.buttonDisabledColor,
    },
    '&:hover, &:active': {
      boxShadow: 'none',
    },
  },

  sizeLarge: {
    height: 48,
  },

  startIcon: {
    '&>*:nth-of-type(1)': {
      fontSize: 'inherit',
    },
    marginRight: theme.spacing(1.25),
  },

  endIcon: {
    '&>*:nth-of-type(1)': {
      fontSize: 'inherit',
    },
    marginLeft: theme.spacing(1.25),
  },

  contained: {
    color: theme.themeColors.buttonContainedColor,
    background: theme.themeColors.buttonContainedBackground,
    '&:hover, &.active': {
      background: theme.themeColors.buttonContainedBackgroundHover,
      color: theme.themeColors.buttonContainedColorHover,
    },
    '&.active': {
      svg: { path: { fill: theme.themeColors.buttonContainedColorHover } },
    },
  },
  containedSecondary: {
    color: theme.themeColors.buttonContainedSecondaryColor,
    background: theme.themeColors.buttonContainedSecondaryBackground,
    '&:hover': {
      background: theme.themeColors.buttonContainedSecondaryBackgroundHover,
      color: theme.themeColors.buttonContainedSecondaryColorHover,
    },
  },

  outlined: {
    color: theme.themeColors.buttonContainedColor,
    background: theme.themeColors.buttonContainedBackground,
    border: '1.5px solid',
    borderColor: 'transparent',
    transition: '0.3s all ease',
    borderRadius: BORDER_RADIUS_S,
    '&:hover, &.active': {
      border: '1.5px solid',
      borderColor: theme.themeColors.buttonContainedBackgroundHover,
    },
  },
});

export const getMuiButtonDefaultProps = (): ComponentsProps['MuiButton'] => ({
  disableElevation: false,
  disableFocusRipple: true,
  disableRipple: true,
  size: 'medium',
  variant: 'contained',
});
