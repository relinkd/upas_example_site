import { Stack, TextField } from '@mui/material';

export default {
  title: 'theme/TextField',
};

export const Default = () => (
  <Stack
    spacing={2}
    sx={{
      flexGrow: 1,
      p: 2,
    }}
  >
    <TextField placeholder="Search name" sx={{ width: 400 }} />
    <TextField error placeholder="Search name" sx={{ width: 400 }} />
    <TextField placeholder="Search name" className="success" sx={{ width: 400 }} />
    <TextField placeholder="Search name" disabled sx={{ width: 400 }} />
    <TextField placeholder="error" error sx={{ width: 400 }} />
  </Stack>
);
