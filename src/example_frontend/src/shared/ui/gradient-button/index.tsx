import { Button, styled } from '@mui/material';
import { BORDER_RADIUS_S, COLOR_BLACK } from 'shared';

export const GradientButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: COLOR_BLACK,
  borderRadius: BORDER_RADIUS_S,
  fontSize: '20px',
  padding: '10px 30px',
  '&:hover': {
    backgroundColor: 'white',
    boxShadow: '0px 0px 40px -15px #635D95'
  }
}));