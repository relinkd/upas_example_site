import { forwardRef } from 'react';
import { styled, TextField, TextFieldProps, Typography } from '@mui/material';

export type TextfieldWithLabelProps = {
  label: string;
  isError?: boolean;
} & TextFieldProps;

export const TextFieldLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isError',
})<{ isError?: boolean }>(({ theme, isError }) => ({
  textTransform: 'capitalize',
  color: isError ? theme.themeColors.colorRed : theme.themeColors.colorWh,
  marginBottom: 8,
}));

export const TextfieldWithLabel = forwardRef<HTMLInputElement, TextfieldWithLabelProps>(
  ({ label, isError, ...textFieldProps }, ref) => {
    return (
      <>
        <TextFieldLabel variant="body2" isError={isError}>
          {label}
        </TextFieldLabel>
        <TextField {...textFieldProps} inputRef={ref} error={isError} />
      </>
    );
  },
);

TextfieldWithLabel.displayName = 'TextfieldWithLabel';
