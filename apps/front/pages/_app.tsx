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
  let userId = '';
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
  let access_token = '';
  const parseJwt = (token: string) => {
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  const Login = async (email: string, password: string) => {
    console.log('login');
    try {
      const data = { email, password };
      const signIn = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.text());
      access_token = signIn;
      const tokenPayload = parseJwt(access_token);
      userId = tokenPayload.sub;
    } catch (error) {
      console.error(error);
    }
    setAuth(true);
  };
  const SignUp = async (email: string, password: string, name: string) => {
    console.log('SignUp');

    try {
      const data = { email, password, name };
      console.log(data);

      const signup = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      console.log(signup);
      Login(email, password);
      if (signup.error) console.error(signup.message);
    } catch (error) {
      console.error(error);
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
