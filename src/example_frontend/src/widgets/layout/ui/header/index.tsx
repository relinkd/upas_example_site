import { Stack, styled, Typography } from '@mui/material';
import Logo from '../assets/logo.svg?react';
import { Link } from 'react-router-dom';
import { useAuth } from '@ic-reactor/react';

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
`;

const RouterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <StyledLink to={to}>
      <Typography sx={{ color: '#fff' }}>{children}</Typography>
    </StyledLink>
  )
};

export const Header = () => {
  const { authenticated } = useAuth();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" px={2.5} py={2.5} sx={{ background: 'linear-gradient(98.82deg, #D8CCE3 1.85%, #B3DDF8 136.36%)' }}>
      <Stack direction="row" alignItems="center" width="100%" paddingX={2} justifyContent="space-between" spacing={2}>
        <Logo width="80px" height="80px" />
        {
          authenticated && (
            <Stack direction="row" spacing={2}>
              <RouterLink to="/">Main</RouterLink>
              <RouterLink to="/feed">Feed</RouterLink>
              <RouterLink to="/form">Form</RouterLink>
            </Stack>
    
          )
        }
      </Stack>
    </Stack>
  )
};
