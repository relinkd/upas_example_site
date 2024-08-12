import { colorThemes } from 'shared/config';

declare module '@mui/material' {
  interface Theme extends MuiTheme {
    themeColors: typeof colorThemes;
  }
}
export type SagaPayload<T> = PayloadAction<ArgumentTypes<T>>;
