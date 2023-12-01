import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BasicButton } from '../components/forms/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../style/theme';
import Header from '../components/nav/header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title color="primary">Web Chat App</title>
      </Head>
      <main className="app">
        <Header/>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
