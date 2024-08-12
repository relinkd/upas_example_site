/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Typography } from '@mui/material';

export default {
  title: 'theme/Typography',
  component: Typography,
};
export const Default: React.FC = () => (
  <>
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4">H4 heading</Typography>
      <Typography variant="h4" className="bold">
        H4 heading
      </Typography>
    </div>

    <Typography variant="body1" display="block">
      body1
    </Typography>

    <Typography variant="body2" display="block">
      Body 2
    </Typography>

    <Typography variant="subtitle1" display="block">
      subtitle1
    </Typography>

    <Typography variant="subtitle2" display="block">
      subtitle1
    </Typography>

    <Typography variant="button" display="block">
      Button
    </Typography>
  </>
);
