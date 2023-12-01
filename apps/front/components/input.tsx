import TextField from '@mui/material/TextField';
import React from 'react';

interface BasicInputProps {
    label: string;
    forwardedRef: React.RefObject<HTMLInputElement>;
    variant?: 'standard' | 'filled' | 'outlined'; 
}

export default function BasicInput(props: BasicInputProps) {
    return (
        
        <TextField 
            className="standard-basic" 
            label={props.label}
            variant={props.variant || "standard"} 
            inputRef={props.forwardedRef} 
        />
    );
}
