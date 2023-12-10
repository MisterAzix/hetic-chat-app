import React, { useRef, useState } from 'react';
import BasicInput from './Input';
import { Button, Typography, Divider, Box, Link } from '@mui/material';
import { BasicButton } from './Button';

interface FormProps {
    formVariant: 'login' | 'signup' | 'update';
  onLogin?: () => void;
  onSignup?: () => void;
  onUpdate?: (updatedInfo: { name?: string; email?: string; password?: string; confirmPassword?: string }) => void;
}

export default function LoginForm({ onLogin, onSignup, onUpdate, formVariant  }: FormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [currentFormVariant, setFormVariant] = useState<'login' | 'signup' | 'update'>(formVariant);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const toggleFormVariant = () => {
    setFormVariant(currentFormVariant  === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = () => {
    if (currentFormVariant  === 'login' && onLogin) {
      onLogin();  
    } else if (currentFormVariant  === 'signup' && onSignup) {
      onSignup(); 
    }
    else if (currentFormVariant  === 'update' && onUpdate) {
        onUpdate({ name, email, password, confirmPassword });
    }
  };

  return (
    <Box
      component="form"
      sx={{ 
        width: 1, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        height: 'fill',
        gap: 3,
        paddingLeft: 1/5,
        paddingRight: 1/5,
      }}
    >
       {currentFormVariant  === 'login' && <Typography variant="h1">Connexion</Typography>}
      {currentFormVariant  === 'signup' && (
        <Typography variant="h1">Inscription</Typography>
      )}
      {(currentFormVariant === 'signup' || currentFormVariant === 'update') && (
        <BasicInput
          label="Nom"
          forwardedRef={nameRef}
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
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
      {(currentFormVariant === 'signup' || currentFormVariant === 'update') && (
        <BasicInput
          label="Confirmation de mot de passe"
          forwardedRef={confirmPasswordRef}
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      {currentFormVariant  === 'login' && (
        <Typography 
            variant="body1"
        >
            Pas de compte ?
            <Box 
                component="span"
                sx={{  
                    cursor: 'pointer', 
                    color: 'text.primary', // Couleur par défaut
                    '&:hover': {
                        color: 'primary.main', // Couleur au survol
                    } 
                }} 
                onClick={toggleFormVariant}
            >
                Créez-en un
            </Box>
        </Typography>
      )
      }
      {currentFormVariant  === 'signup' && (
        <Typography 
            variant="body1"
        >
            Vous avez déjà un compte ?
            <Box 
                component="span"
                sx={{  
                    cursor: 'pointer', 
                    color: 'text.primary', // Couleur par défaut
                    '&:hover': {
                        color: 'primary.main', // Couleur au survol
                    } 
                }} 
                onClick={toggleFormVariant}
            >
                Connectez-vous
            </Box>
        </Typography>
      )
      }
        <BasicButton 
            chat='no' 
            onClick={handleSubmit} 
            buttonText='Valider' 
            buttonVariant='contained' 
            buttonColor='primary' 
        />
    </Box>
  );
}
