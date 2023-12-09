import TextField from '@mui/material/TextField';
import React from 'react';

interface BasicInputProps {
  label: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  variant?: 'standard' | 'filled' | 'outlined';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicInput(props: BasicInputProps) {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) { 
        event.preventDefault(); 
       
    }
};
  return (
    <TextField
      sx={{ flexGrow: 1, marginRight: 1 }} 
      className="standard-basic"
      label={props.label !== '' ? props.label : undefined}
      variant={props.variant || 'standard'}
      inputRef={props.forwardedRef}
      value={props.value} 
      onChange={props.onChange}
    />
  );
}
