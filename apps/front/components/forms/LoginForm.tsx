import React, { useRef, useState } from 'react';
import BasicInput from './Input';
import { Button, Typography, Divider, Box, Link } from '@mui/material';
import { BasicButton } from './Button';

interface FormProps {
  variant: 'login' | 'signup' | 'update';
  onLogin?: () => void;
  onSignup?: (email: string, password: string) => void;
  onUpdate?: () => void;
}

export default function LoginForm({
  variant,
  onLogin,
  onSignup,
  onUpdate,
}: FormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [formVariant, setFormVariant] = useState<'login' | 'signup'>('login');

  const toggleFormVariant = () => {
    setFormVariant(formVariant === 'login' ? 'signup' : 'login');
    console.log(formVariant);
  };

  const handleSubmit = () => {
    if (variant === 'login' && onLogin) {
      onLogin();
    } else if (variant === 'signup' && onSignup) {
      onSignup(email, password);
    } else if (variant === 'update' && onUpdate) {
      onUpdate();
    }
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="space-around"
      sx={{ width: 1, height: 1 }}
    >
      {variant === 'login' && <Typography variant="h1">Connexion</Typography>}
      {variant === 'signup' && (
        <Typography variant="h1">Inscription</Typography>
      )}
      {variant === 'signup' ||
        (variant === 'update' && (
          <BasicInput
            label="Nom"
            forwardedRef={nameRef}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ))}
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
      {variant === 'signup' ||
        (variant === 'update' && (
          <BasicInput
            label="Confirmation de mot de passe"
            forwardedRef={confirmPasswordRef}
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        ))}
      {variant === 'login' && (
        <Typography variant="body1">
          Pas de compte ?<span onClick={toggleFormVariant}>Créez-en un</span>
        </Typography>
      )}
      {variant === 'signup' && (
        <Typography variant="body1">
          Vous avez déjà un compte ?
          <span onClick={toggleFormVariant}>Connectez-vous</span>
        </Typography>
      )}
      <BasicButton
        chat="no"
        onClick={handleSubmit}
        buttonText="Valider"
        buttonVariant="contained"
        buttonColor="primary"
      />
    </Box>
  );
}