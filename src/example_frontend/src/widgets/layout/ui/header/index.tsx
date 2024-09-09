import { Stack } from '@mui/material';
import Logo from '../assets/logo.svg?react';
import { Link } from 'react-router-dom';
import { useAuth } from '@ic-reactor/react';

export const Header = () => {
  const { authenticated } = useAuth();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" px={2.5} pt={2.5}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Logo width="80px" height="80px" />
        {
          authenticated && (
            <Stack direction="row" spacing={2}>
              <Link to="/">Main</Link>
              <Link to="/feed">Feed</Link>
              <Link to="/form">Form</Link>
            </Stack>
    
          )
        }
      </Stack>
    </Stack>
  )
};
