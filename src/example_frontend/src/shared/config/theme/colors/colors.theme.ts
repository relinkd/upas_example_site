import { COLOR_BLACK, COLOR_PURPURE, COLOR_WH } from './colors.constants';
import {
  appColors,
  colorsAccordion,
  colorsBorder,
  colorsButton,
  colorsIconButton,
  colorsLayout,
  colorsRadioAndCheckbox,
  colorsSearch,
  colorsSwitch,
  colorsTextField,
  colorsTypography,
  colorsUploadImage,
} from './components';

export const colorThemes = {
  background: COLOR_WH,
  mainColor: COLOR_BLACK,
  borderMain: COLOR_PURPURE,
  ...appColors,
  ...colorsButton,
  ...colorsIconButton,
  ...colorsRadioAndCheckbox,
  ...colorsTextField,
  ...colorsTypography,
  ...colorsLayout,
  ...colorsUploadImage,
  ...colorsSwitch,
  ...colorsAccordion,
  ...colorsSearch,
  ...colorsBorder,
};
