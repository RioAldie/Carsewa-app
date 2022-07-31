import { Box, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// When using TypeScript 4.x and above
import type {} from '@mui/x-data-grid/themeAugmentation';
import Footer from '../components/Footer';

let theme = createTheme({
  palette: {
    primary: {
      main: '#EB1D36',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  });
  if (isSSR) return null;
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: '#F3F3F4',
          }}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
