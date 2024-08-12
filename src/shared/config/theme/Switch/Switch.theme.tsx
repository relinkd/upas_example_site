import { ComponentsOverrides, Theme } from '@mui/material';

import { BORDER_RADIUS_M } from '../common';

export const getMuiSwitchOverrides = (theme: Theme): ComponentsOverrides['MuiSwitch'] => ({
  root: {
    width: 48,
    height: 24,
    padding: 0,

    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(24px)',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.themeColors.colorSwitchAccent,
          opacity: 1,
          border: 0,
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.themeColors.colorSwitchBlack,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      backgroundColor: theme.themeColors.colorSwitchAccent,
      width: 20,
      height: 20,
    },
    '& .MuiSwitch-track': {
      borderRadius: BORDER_RADIUS_M,
      backgroundColor: theme.themeColors.colorSwitchBlack,
      opacity: 1,
    },
  },
});
