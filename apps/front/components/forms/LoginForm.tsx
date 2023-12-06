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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      {/* ... autres éléments */}
      <BasicInput
        label="Email"
        forwardedRef={emailRef}
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <BasicInput
        label="Mot de passe"
        forwardedRef={passwordRef}
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {variant === 'signup' && (
        <BasicInput
          label="Confirmation de mot de passe"
          forwardedRef={confirmPasswordRef}
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      {/* ... autres éléments */}
    </Box>
  );
}
