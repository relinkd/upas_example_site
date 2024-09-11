import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Typography } from '@mui/material';
import { Layout } from 'widgets';
import { routes, GradientButtonWraper, BORDER_RADIUS_S } from 'shared';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@ic-reactor/react';
import { GradientButton } from 'shared';

export const ConnectButton = () => {
  const { login } = useAuth();

  return (
    <GradientButtonWraper sx={{ borderRadius: BORDER_RADIUS_S }}>
      <GradientButton
        onClick={() => {
          login({
            identityProvider: `${import.meta.env.VITE_CANISTER_URL_INTERNET_IDENTITY}#authorize`
          })
        }}
      >
        Connect
      </GradientButton>
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
    <Layout headerText="Connect your wallet">
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} pt={10} justifyContent="center" alignItems="center">
        <ConnectButton />
      </Stack>
      <Typography className="center" mt={7.5}>
        Sign in by selecting your preferred wallet
      </Typography>
    </Layout>
  );
};
