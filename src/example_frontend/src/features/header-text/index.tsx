import { Typography, Stack } from "@mui/material";

export const HeaderText = ({ header }: { header: string }) => {
  return (
    <Stack width={1} direction="row" height="100px" justifyContent="center" alignItems="flex-end" sx={{
      background: 'linear-gradient(98.82deg, #D8CCE3 1.85%, #B3DDF8 136.36%)'
    }}>
      <Typography variant="h1" color="white" sx={{
        position: 'relative',
        top: '12px',
        fontSize: '60px',
        lineHeight: '60px'
      }}>{header}</Typography>
    </Stack>
  );
};
