import { Stack } from '@mui/material';
import Logo from '../assets/logo.svg?react';

export const Header = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" px={2.5} pt={2.5}>
      <Logo width="80px" height="80px" />
    </Stack>
  )
};
