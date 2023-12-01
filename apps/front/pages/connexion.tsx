import LogForm from "../components/forms/loginform"
import { useState } from "react";
import { Box, Container } from "@mui/material";
import Link from "next/link";

export default function PageConnexionInscription(){
    const [formVariant, setFormVariant] = useState<'login' | 'signup'>('login');

    const toggleFormVariant = () => {
        setFormVariant(formVariant === 'login' ? 'signup' : 'login');
    };
    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center" 
            justifyContent="center"
        >
            <LogForm 
                variant={formVariant} 
                onLogin={() => {/* Logique de connexion */}} 
                onSignup={() => {/* Logique d'inscription */}}
            />
            <Box mt={2}>
                {formVariant === 'login' ? (
                    <>
                    <Link href="#"  >
                        Mot de passe oublié ?
                    </Link>
                    <Link href="#" onClick={toggleFormVariant}>
                    Pas encore inscrit ?
                    </Link>
                    </>
                    
                ) : (
                    <Link href="#" onClick={toggleFormVariant} >
                    Déjà inscrit ?
                    </Link>
                )}
            </Box>
        </Box>
        

    )
}