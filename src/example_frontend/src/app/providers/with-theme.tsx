import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { colorThemes, getTheme } from 'shared/config';

export const withTheme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={getTheme(colorThemes)}>{children}</ThemeProvider>
);
