import React, { useRef, useState } from 'react';
import BasicInput from './Input';
import { Button, Typography, Divider, Box, Link } from '@mui/material';
import { BasicButton } from './Button';

interface FormProps {
  variant: 'login' | 'signup';
  onLogin?: () => void;
  onSignup?: () => void;
}

export default function LoginForm({ variant, onLogin, onSignup }: FormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [formVariant, setFormVariant] = useState<'login' | 'signup'>('login');

  const toggleFormVariant = () => {
    setFormVariant(formVariant === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = () => {
    // faut implémenter la logique de soumission ici en fonction de la version du form
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="space-around"
    >
      <Box mb={2}>
        <Typography variant="h1">
          {variant === 'login' ? 'Connexion' : 'Inscription'}
        </Typography>
        <Divider style={{ backgroundColor: 'primary.main' }} />
      </Box>

      <BasicInput label="Email" forwardedRef={emailRef} variant="outlined" />
      <BasicInput
        label="Mot de passe"
        forwardedRef={passwordRef}
        variant="outlined"
      />
      {variant === 'signup' && (
        <BasicInput
          label="Confirmation de mot de passe"
          forwardedRef={confirmPasswordRef}
          variant="outlined"
        />
      )}

      <BasicButton
        buttonVariant="contained"
        buttonColor="primary"
        onClick={handleSubmit}
        buttonText={variant === 'login' ? 'Connexion' : 'Inscription'}
      />
    </Box>
  );
}
