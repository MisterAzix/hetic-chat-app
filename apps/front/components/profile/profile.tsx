import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';
import AvatarComponent from './pfp';
import LoginForm from '../forms/LoginForm';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const handleLogout = () => {
  };

  const handleDeleteAccount = () => {
  };

  const handleUpdateInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Box>
      <AvatarComponent alt={user.name} name={user.name} />
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="body1">{user.email}</Typography>
      <LoginForm variant='update'/>
      <Button onClick={handleLogout}>Se déconnecter</Button>
      <Button onClick={handleDeleteAccount}>Supprimer le compte</Button>
    </Box>
  );
}
