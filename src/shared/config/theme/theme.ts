import { createTheme } from '@mui/material';

import {
  getMuiAccordion,
  getMuiAccordionDetails,
  getMuiAccordionPropsDefaultProps,
  getMuiAccordionSummary,
} from './Accordion';
import { getMuiButtonDefaultProps, getMuiButtonOverrides } from './Button';
import { getMuiCheckbox, getMuiCheckboxDefaultProps } from './Checkbox';
import { colorThemes } from './colors';
import { getMuiContainerDefaultProps, getMuiContainerOverrides } from './Container';
import { getMuiCssBaselineDefaultProps, getMuiCssBaselineOverrides } from './CssBaseLine';
import { breakpointOptions, getMuiGridDefaultProps, getMuiGridOverrides } from './Grid';
import { getMuiIconButtonDefaultProps, getMuiIconButtonOverrides } from './IconButton';
import { getMuiMenuItemDefaultProps, getMuiMenuItemOverrides, getMuiMenuOverrides } from './Menu';
import { getMuiRadio, getMuiRadioDefaultProps } from './Radio';
import { getMuiSwitchOverrides } from './Switch';
import { getMuiTextFieldDefaultProps, getMuiTextFieldOverrides } from './TextField';
import { getTypographyDefaultProps, getTypographyOverrides } from './Typography';

export const getTheme = (themeColors: typeof colorThemes) => {
  const themeBase = createTheme(
    {
      breakpoints: breakpointOptions,
    },
    {
      themeColors,
    },
  );

  return createTheme(themeBase, {
    components: {
      MuiCssBaseline: {
        styleOverrides: getMuiCssBaselineOverrides(themeBase),
        defaultProps: getMuiCssBaselineDefaultProps(),
      },
      MuiContainer: {
        defaultProps: getMuiContainerDefaultProps(),
        styleOverrides: getMuiContainerOverrides(themeBase),
      },
      MuiGrid: {
        defaultProps: getMuiGridDefaultProps(),
        styleOverrides: getMuiGridOverrides(),
      },
      MuiTypography: {
        styleOverrides: getTypographyOverrides(themeBase),
        defaultProps: getTypographyDefaultProps(),
      },
      MuiButton: {
        defaultProps: getMuiButtonDefaultProps(),
        styleOverrides: getMuiButtonOverrides(themeBase),
      },
      MuiRadio: {
        styleOverrides: getMuiRadio(themeBase),
        defaultProps: getMuiRadioDefaultProps(),
      },
      MuiCheckbox: {
        defaultProps: getMuiCheckboxDefaultProps(),
        styleOverrides: getMuiCheckbox(themeBase),
      },
      MuiIconButton: {
        styleOverrides: getMuiIconButtonOverrides(themeBase),
        defaultProps: getMuiIconButtonDefaultProps(),
      },
      MuiTextField: {
        styleOverrides: getMuiTextFieldOverrides(themeBase),
        defaultProps: getMuiTextFieldDefaultProps(),
      },
      MuiMenu: {
        styleOverrides: getMuiMenuOverrides(themeBase),
      },
      MuiMenuItem: {
        styleOverrides: getMuiMenuItemOverrides(themeBase),
        defaultProps: getMuiMenuItemDefaultProps(),
      },
      MuiSwitch: {
        styleOverrides: getMuiSwitchOverrides(themeBase),
      },
      MuiAccordion: {
        defaultProps: getMuiAccordionPropsDefaultProps(),
        styleOverrides: getMuiAccordion(themeBase),
      },
      MuiAccordionDetails: {
        styleOverrides: getMuiAccordionDetails(themeBase),
      },
      MuiAccordionSummary: {
        styleOverrides: getMuiAccordionSummary(themeBase),
      },
    },
  });
};
