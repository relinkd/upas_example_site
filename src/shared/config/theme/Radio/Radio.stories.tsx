import { FormControl, FormControlLabel, FormGroup, Radio, Typography } from '@mui/material';

export default {
  title: 'theme/Radio',
};

export const Default = () => (
  <>
    <Typography variant="h3">Checkbox</Typography>
    <FormControl style={{ padding: 20 }} component="fieldset">
      <FormGroup>
        <FormControlLabel control={<Radio />} label="Active" />
      </FormGroup>
    </FormControl>
    <Radio />
  </>
);
