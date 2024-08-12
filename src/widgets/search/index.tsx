import { TextField } from '@mui/material';
import { useState } from 'react';
import { COLOR_BLACK } from 'shared'

export const Search = () => {

  const [input, setInput] = useState("");

  return (
    <TextField 
      variant='filled'
      label='Find achievement'
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      sx={{
        width: '100%',
        marginTop: 15
      }}
    />
  );
};
