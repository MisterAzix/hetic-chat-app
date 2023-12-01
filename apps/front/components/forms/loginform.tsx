import React, { useRef } from 'react';
import BasicInput from './input';
import { BasicButton } from './Button';

interface FormProps {
    variant: 'login' | 'signup';
    onLogin: () => void;
    onSignup: () => void;
}

export default function Form({ variant, onLogin, onSignup }: FormProps) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (variant === 'login') {
            onLogin();
        } else {
            onSignup();
        }
    };

    return (
        <form>
            <BasicInput 
                label="Email" 
                forwardedRef={emailRef} 
                variant="outlined" 
            />
            <BasicInput 
                label="Password" 
                forwardedRef={passwordRef} 
                variant="outlined" 
            />
            {variant === 'signup' && (
                <BasicInput 
                    label="Confirm Password" 
                    forwardedRef={confirmPasswordRef} 
                    variant="outlined" 
                />
            )}
            <BasicButton 
                buttonText={variant === 'login' ? 'Login' : 'Sign Up'} 
                onClick={handleSubmit} 
            />
        </form>
    );
}
