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
  const [auth, setAuth] = useState<boolean>(false);
  const appBarHeight = theme.mixins.toolbar.minHeight;
  const paddingTopValue =
    typeof appBarHeight === 'number'
      ? appBarHeight + 30
      : `calc(${appBarHeight} + 10px)`;

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const drawerWidth = 240;
  const [showProfile, setShowProfile] = useState(false);
  const apiUrl = 'http://localhost:3000/api';

  const Login = () => {
    console.log('login');

    setAuth(true);
  };
  const SignUp = async (email: string, password: string) => {
    try {
      const data = { email, password };
      console.log(data);

      const signup = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(data),
      }).then((res) => res.json());
      console.log(email, password, signup);
      if (signup.error) console.error(signup.message);
    } catch (error: any) {
      console.error(error.message);
    }

    // setAuth(true);
  };
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Web Chat</title>
      </Head>

      <main
        style={{
          paddingTop: paddingTopValue,
          paddingLeft: isDesktop ? drawerWidth : 0,
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Header auth={auth} onProfileClick={toggleProfile} />
        <Box
          sx={{
            display: 'flex',
            width: 1,
            height: 1,
            maxHeight: 1,
            minHeight: 1,
          }}
        >
          {auth ? (
            showProfile ? (
              <ProfilePage />
            ) : (
              <ChatBox />
            )
          ) : (
            <LoginForm formVariant="login" onLogin={Login} onSignup={SignUp} />
          )}
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
