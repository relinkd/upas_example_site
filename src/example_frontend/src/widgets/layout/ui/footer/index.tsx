import { Stack, Link, styled } from '@mui/material';
import { BORDER_RADIUS_M, BORDER, COLOR_BLACK, COLOR_LIGHTER_GRAY, COLOR_BORDER_PURPLE, COLOR_TEXT_GRAY } from 'shared';

export const FooterLink = styled(Link)(({ theme }) => ({
    paddingLeft: 8,
    paddingRight: 8,
    color: COLOR_BLACK,
    fontSize: "20px",
    textDecoration: 'none',
    '&:hover': {
      color: COLOR_TEXT_GRAY
    }
}))


export const Footer = () => {
  return (
    <Stack direction="row" sx={{
        width: '500px',
        height: '65px',
        margin: '0 auto',
        backgroundColor: COLOR_LIGHTER_GRAY,
        borderRadius: BORDER_RADIUS_M,
        alignItems: 'center',
        justifyContent: 'space-around',
        border: BORDER,
        borderColor: COLOR_BORDER_PURPLE,
        marginBottom: 2
    }}>
      <FooterLink href="#">Github</FooterLink>
      <FooterLink href="#">DOCs</FooterLink>
    </Stack>
  )
};
