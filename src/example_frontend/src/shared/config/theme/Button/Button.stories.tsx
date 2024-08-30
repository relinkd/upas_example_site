import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

export default {
  title: 'theme/Button',
};

export const Default: React.FC = () => (
  <Box padding={4}>
    <Typography>Contained</Typography>
    <Stack spacing={1} direction="row" alignItems="center">
      <Button variant="contained" size="large">
        Button lg
      </Button>
      <Button variant="contained" size="medium">
        Approve
      </Button>
      <Button variant="contained" size="small">
        Button Sm
      </Button>
      <Button variant="contained" disabled>
        Button Disabled
      </Button>
    </Stack>
    <Typography>Outlined</Typography>
    <Stack spacing={1} direction="row" alignItems="center">
      <Button variant="outlined" size="small">
        Button Sm
      </Button>
      <Button variant="outlined" disabled>
        Button Outlined Disabled
      </Button>
    </Stack>
  </Box>
);
