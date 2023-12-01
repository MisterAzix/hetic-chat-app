import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BasicButton } from '../components/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../style/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title color="primary">Welcome to front!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
