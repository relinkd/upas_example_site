import { Box } from '@mui/material';
import { Icon } from 'shared';

export const Loader = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        animation: 'spin 1.5s linear infinite',
        width: '34px',
        height: '34px',

        '@keyframes spin': {
          from: {
            transform: 'rotate(0)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      }}
    >
      <Icon type="loader" size={34} />
    </Box>
  );
};
