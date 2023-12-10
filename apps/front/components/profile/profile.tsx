import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';
import AvatarComponent from './pfp';
import LoginForm from '../forms/LoginForm';
import { BasicButton } from '../forms/Button';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const handleLogout = () => {
  };

  const handleDeleteAccount = () => {
  };

  const handleUpdateInfo = (updatedInfo: { name?: string; email?: string; password?: string; confirmPassword?: string }) => {
    setUser({ ...user, ...updatedInfo });
  };
  
  

  return (
    <Box
      sx={{
          width: 1,
          height: 1,
          paddingLeft: '10%',
          paddingRight: '10%',
          display: 'flex',
          flexDirection: 'column',
          gap:2,
          alignItems: 'flex-start'
      }}
    >
      <AvatarComponent 
        alt={user.name} 
        name={user.name} 
      />
      <Typography 
        variant="h1"
      >
        {user.name}
      </Typography>
      <Typography 
        sx={{
          marginBottom: '5vh',
        }} 
        variant="h2"
      >
          {user.email}
      </Typography>
      <LoginForm 
        formVariant='update' 
        onUpdate={handleUpdateInfo}
      />
      <Box 
        sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '40%',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}
      >
        <BasicButton 
          onClick={handleLogout} 
          buttonText='Se déconnecter' 
          buttonVariant='outlined' 
          chat='no' 
          buttonColor='primary'
        />
        <BasicButton 
          onClick={handleDeleteAccount}
          buttonText='Supprimer le compte' 
          buttonVariant='text' 
          chat='no' 
          buttonColor='primary'
        />
      </Box>
    </Box>
  );
}
