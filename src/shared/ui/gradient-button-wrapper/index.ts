import { BORDER_RADIUS_S, COLOR_PURPLE_GRADIENT, BORDER_PADDING, COLOR_BORDER_GRAY } from 'shared';
import { styled, Stack } from '@mui/material';

export const GradientButtonWraper = styled(Stack)(({ theme }) => ({
    background: COLOR_BORDER_GRAY,
    position: "relative",
    padding: BORDER_PADDING,
    '&:hover': {
      background: COLOR_PURPLE_GRADIENT
    }
}))
