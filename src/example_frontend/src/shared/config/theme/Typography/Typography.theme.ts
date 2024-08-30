import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

export enum FontWeights {
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
}

export enum FontFamilies {
  primary = '"Inter", sans-serif',
  secondary = '"Alpha Lyrae", sans-serif',
  tertiary = '"Chakra Petch", sans-serif',
}

export const styleVariations = {
  '&.center': {
    textAlign: 'center',
  },
  '&.capitalize': {
    textTransform: 'capitalize',
  },
  '&.uppercase': {
    textTransform: 'uppercase',
  },
};

export const getTypographyOverrides = (theme: Theme): ComponentsOverrides['MuiTypography'] => ({
  root: {
    textTransform: 'none',
    color: theme.themeColors.colorTypographyMain,
    fontFamily: FontFamilies.primary,
    fontWeight: FontWeights.Medium,
    textAlign: 'left',
    fontStyle: 'normal',
    '&.gray': {
      color: theme.themeColors.colorTypographyLight,
    },
    '&.black': {
      color: theme.themeColors.colorTypographyMain,
    },
    ...styleVariations,
  },

  h1: {
    fontSize: 28,
    lineHeight: '28px',
    fontWeight: FontWeights.SemiBold,
  },

  h2: {
    fontSize: 80,
    lineHeight: '90px',
    fontWeight: FontWeights.Medium,

    [theme.breakpoints.down('md')]: {
      ...theme.typography.h3,
    },

    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
  },

  h3: {
    fontSize: 60,
    lineHeight: '70px',
    fontWeight: FontWeights.Medium,
  },

  h4: {
    fontSize: 36,
    lineHeight: '40px',
    fontWeight: FontWeights.Medium,
  },

  h5: {
    fontSize: 24,
    lineHeight: '112.5%',
    fontWeight: FontWeights.Medium,
  },

  subtitle1: {
    fontSize: 24,
    lineHeight: '27px',
    fontWeight: FontWeights.Medium,

    '&.label': {
      fontSize: 16,
      lineHeight: '19px',
    },
  },

  body1: {
    fontSize: 18,
    lineHeight: '20px',
    color: theme.themeColors.colorTypographyLight,
    fontWeight: FontWeights.Regular,
    fontFamily: FontFamilies.primary,
  },

  body2: {
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: FontFamilies.secondary,

    '&.light': {
      color: theme.themeColors.colorTypographyLight,
    },
  },

  subtitle2: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: FontWeights.Medium,
    fontFamily: FontFamilies.tertiary,

    '&.light': {
      color: theme.themeColors.colorTypographyLight,
    },
  },

  button: {
    fontSize: 15,
    lineHeight: '18px',
    textTransform: 'none',
    fontFamily: FontFamilies.secondary,
  },
});

export const getTypographyDefaultProps = (): ComponentsProps['MuiTypography'] => ({
  variant: 'body1',
});
