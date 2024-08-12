import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { BORDER_RADIUS_M, COLOR_BORDER_PURPLE } from 'shared/config';

export const getMuiTextFieldOverrides = (theme: Theme): ComponentsOverrides['MuiTextField'] => ({
  root: {
    width: '100%',
    '.MuiInputBase-root': {
      padding: theme.spacing(2),
      height: 70,
      background: `${theme.themeColors.colorWh} !important`,
      border: `1px solid`,
      borderColor: COLOR_BORDER_PURPLE,
      borderRadius: BORDER_RADIUS_M,
      '&::after, &::before': {
        display: 'none',
      },
      '&:hover, &:active': {
        borderColor: theme.themeColors.textFieldBorderHover,
        boxShadow: '0px 0px 58.1px -15px #635D952E'
      },
      '&.Mui-focused': {
        borderColor: theme.themeColors.textFieldBorderFocused,
      },
      '&.Mui-disabled': {
        borderColor: theme.themeColors.textFieldBackground,
      },
      '.MuiInputBase-input': {
        ...theme.typography.body2,
        lineHeight: '20px',
        padding: 0,
        color: theme.themeColors.textFieldColor,
        '&.Mui-disabled': {
          opacity: 1,
          color: theme.themeColors.textFieldColorDisabled,
          WebkitTextFillColor: theme.themeColors.textFieldColorDisabled,
        },
      },
      '.MuiFilledInput-notchedOutline': {
        padding: 0,
      },
      '&.Mui-error': {
        borderColor: `${theme.themeColors.textFieldColorError} !important`,
      },
      '&.Mui-error fieldset': {
        borderColor: `${theme.themeColors.textFieldColorError} !important`,
      },
    },
    '.MuiInputBase-multiline': {
      background: theme.themeColors.textFieldBackground,
      minHeight: 48,
      height: 'min-content',
    },

    '.MuiFormLabel-root': {
      ...theme.typography.body2,
      lineHeight: '32px',
      color: theme.themeColors.textFieldFormLabel,
      fontSize: '17px',
      paddingLeft: 70,
      '&.MuiInputLabel-shrink': {
        transform: 'none',
      },
      '&.Mui-focused': {
        color: theme.themeColors.textFieldFormLabel,
        transform: 'none'
      },
    },
    'input:-webkit-autofill': {
      boxShadow: '0 0 0 1000px transparent inset !important',
      transitionDelay: '999999s',
      transitionProperty: 'background-color, color',
    },
  },
});

export const getMuiTextFieldDefaultProps = (): ComponentsProps['MuiTextField'] => ({
  variant: 'filled',
  SelectProps: {
    displayEmpty: true,
  },
  InputProps: {
    autoComplete: 'off',
  },
});
