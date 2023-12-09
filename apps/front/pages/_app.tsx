import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import Header from '../components/nav/header';
import LoginForm from '../components/forms/LoginForm';
import ChatBox from '../components/chat/ChatBox';
import { theme } from '../style/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';
import ProfilePage from '../components/profile/profile';

function CustomApp({ Component, pageProps }: AppProps) {
  var [auth, setAuth] = useState<boolean>(false);
  const appBarHeight = theme.mixins.toolbar.minHeight;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const drawerWidth = 240; 
  const [showProfile, setShowProfile] = useState(false);

  const Login = () => {
    setAuth(true)
  }
  const SignUp = () => {
    setAuth(true)
  }
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Web Chat</title>
      </Head>

      <main style={{ 
        paddingTop: appBarHeight, 
        paddingLeft: isDesktop ? drawerWidth : 0,
        minHeight: '100vh',
        overflow: 'hidden'
      }}>
        <Header auth={auth} onProfileClick={toggleProfile}  />
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" width="100%" >
        {auth ? (showProfile ? <ProfilePage /> : <ChatBox />) : <LoginForm variant='login'onLogin={Login} onSignup={SignUp} />}
        </Box>
        
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
