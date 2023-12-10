import TextField from '@mui/material/TextField';
import React from 'react';

interface BasicInputProps {
  label: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  variant?: 'standard' | 'filled' | 'outlined';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void; 
}

export default function BasicInput(props: BasicInputProps) {
  const { label, variant, forwardedRef, value, onChange, onKeyPress } = props; 

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) { 
        event.preventDefault(); 
       
    }
};
  return (
    <TextField
      sx={{ 
        flexGrow: 1,
        minWidth: '40%', 
        marginRight: 1 
    }} 
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
