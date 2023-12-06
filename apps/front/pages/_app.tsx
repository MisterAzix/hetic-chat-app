import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import Header from '../components/nav/header';
import LoginForm from '../components/forms/LoginForm';
import ChatBox from '../components/chat/ChatBox';
import { theme } from '../style/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Web Chat</title>
      </Head>
      <main className="app">
        <Header auth={auth}  />
        {auth ? <ChatBox /> : <LoginForm />}
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
