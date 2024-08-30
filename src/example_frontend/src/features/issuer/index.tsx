import { Stack, styled, Typography } from '@mui/material';
import { IssuerTuple, GradientButtonWraper, BORDER_RADIUS_S, COLOR_BLACK, COLOR_LIGHT_BLUE } from 'shared';
import icon from './assets/icon.png'

const StyledImg = styled('img')({
  display: 'block',
  width: '40px',
  height: '40px'
});

function buf2hex(buffer: any) { // buffer is an ArrayBuffer
  return [...new Uint8Array(buffer)]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');
}

export const Issuer = ({ issuer }: { issuer: IssuerTuple }) => {
  return (
    <GradientButtonWraper width={1} marginY={1.5} sx={{
      borderRadius: BORDER_RADIUS_S,
      '&:hover': {
        boxShadow: '0px 0px 58.1px -15px #635D952E'
      }
    }}>
      <Stack flexDirection="row" alignItems="center" justifyContent="space-between" width={1} paddingX={2} height="70px" sx={{
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS_S
      }}>
          <Stack flexDirection="row" alignItems="center">
            <StyledImg src={icon} />
            <Typography color={COLOR_BLACK} paddingLeft={6}>{issuer[1].verified ? issuer[1].name : issuer[0]._arr}</Typography>
          </Stack>
          {issuer[1].verified ? <Typography color={COLOR_LIGHT_BLUE}>verified</Typography> : <Typography>unverified</Typography>}
      </Stack>
    </GradientButtonWraper>
  );
};
