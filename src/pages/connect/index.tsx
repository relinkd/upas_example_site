import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Typography, Button } from '@mui/material';
import { Layout } from 'widgets';
import { routes, GradientButtonWraper, BORDER_RADIUS_S, COLOR_BLACK } from 'shared';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@ic-reactor/react';


export const ConnectButton = () => {
  const { login } = useAuth();

  return (
    <GradientButtonWraper sx={{ borderRadius: BORDER_RADIUS_S, '&:hover': {boxShadow: '0px 0px 40px -15px #635D95'} }}>
      <Button sx={{
        backgroundColor: 'white',
        color: COLOR_BLACK,
        borderRadius: BORDER_RADIUS_S,
        fontSize: '20px',
        padding: '10px 30px',
        '&:hover': {
          backgroundColor: 'white',
        }
      }} onClick={() => {
          login({
            identityProvider: `${import.meta.env.VITE_CANISTER_URL_INTERNET_IDENTITY}#authorize`
          })
      }}>Connect</Button>
    </GradientButtonWraper>
  )
}

export const ConnectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      navigate(routes.test.path);
    }
  }, [authenticated, navigate]);

  return (
    <Layout>
      <Typography variant="h1" className="center" mt={{ xs: 2, md: 15, lg: 36 }} mb={3.75}>
        Connect your wallet
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} justifyContent="center" alignItems="center">
        <ConnectButton />
      </Stack>
      <Typography className="center" mt={7.5}>
        Sign in by selecting your preffered wallet
      </Typography>
    </Layout>
  );
};
