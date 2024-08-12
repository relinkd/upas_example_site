import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

import { COLOR_STROKE } from '../colors';
import { FontFamilies } from '../Typography';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/kodchasan/500.css';

export const getMuiCssBaselineOverrides = (theme: Theme): ComponentsOverrides['MuiCssBaseline'] => ({
  '*::-webkit-scrollbar': {
    width: 6,
    height: '100%',
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: COLOR_STROKE,
    borderRadius: 20,
  },

  html: {
    WebkitFontSmoothing: 'antialiased', // Antialiasing.
    MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    boxSizing: 'border-box',
  },
  body: {
    overflowX: 'hidden',
    overflowY: 'overlay',
    margin: 0,
    background: theme.themeColors.background,
    fontFamily: FontFamilies.primary,

    'span, div': {
      fontFeatureSettings: 'liga off',
    },
  },
  a: {
    textDecoration: 'none',
  },
});

export const getMuiCssBaselineDefaultProps = (): ComponentsProps['MuiCssBaseline'] => ({});
