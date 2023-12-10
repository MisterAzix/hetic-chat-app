import TextField from '@mui/material/TextField';
import React from 'react';

interface BasicInputProps {
  label: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  variant?: 'standard' | 'filled' | 'outlined';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
}

export default function BasicInput(props: BasicInputProps) {
  const { label, variant, forwardedRef, value, onChange, onKeyPress } = props;

  return (
    <TextField
      sx={{ flexGrow: 1, marginRight: 1 }} 
      className="standard-basic"
      label={label !== '' ? label : undefined}
      variant={variant || 'standard'}
      inputRef={forwardedRef}
      value={value} 
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
