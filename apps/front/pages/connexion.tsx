import LoginForm from '../components/forms/LoginForm';
import { useState } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function PageConnexionInscription() {
  const [formVariant, setFormVariant] = useState<'login' | 'signup'>('login');

  const toggleFormVariant = () => {
    setFormVariant(formVariant === 'login' ? 'signup' : 'login');
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <LoginForm
        variant={formVariant}
        onLogin={() => {
          
        }}
        onSignup={() => {
        
        }}
      />
      <Box mt={2}>
        {formVariant === 'login' ? (
          <>
            <Link href="#">Mot de passe oublié ?</Link>
            <Link href="#" onClick={toggleFormVariant}>
              Pas encore inscrit ?
            </Link>
          </>
        ) : (
          <Link href="#" onClick={toggleFormVariant}>
            Déjà inscrit ?
          </Link>
        )}
      </Box>
    </Box>
  );
}
