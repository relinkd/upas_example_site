import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { BORDER_RADIUS_L } from 'shared/config/theme/common';

export const getMuiAccordion = (theme: Theme): ComponentsOverrides['MuiAccordion'] => ({
  root: {
    width: '100%',
    background: theme.themeColors.accordionBackground,
    boxShadow: 'none',
    borderRadius: BORDER_RADIUS_L,

    '&:before': {
      display: 'none',
    },
  },
});

export const getMuiAccordionSummary = (theme: Theme): ComponentsOverrides['MuiAccordionSummary'] => ({
  root: {
    padding: theme.spacing(2),
    minHeight: 0,
  },
  content: {
    margin: 0,
  },
});

export const getMuiAccordionDetails = (theme: Theme): ComponentsOverrides['MuiAccordionDetails'] => ({
  root: {
    padding: theme.spacing(2, 2, 3),
  },
});

export const getMuiAccordionPropsDefaultProps = (): ComponentsProps['MuiAccordion'] => ({
  disableGutters: true,
  elevation: 0,
  square: true,
});
