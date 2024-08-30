import { ComponentsOverrides, Theme } from '@mui/material';

export const getMuiDialogOverrides = (theme: Theme): ComponentsOverrides['MuiDialog'] => ({
  root: {
    '.MuiPaper-root': {
      padding: theme.spacing(3),
      background: theme.themeColors.background,
      borderRadius: 12,
      maxWidth: 500,
      width: '100%',
    },
  },
});
