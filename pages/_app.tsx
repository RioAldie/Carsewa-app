import { Box } from '@mui/material';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(()=>{
    setIsSSR(false);
  });
  if(isSSR) return null;
  return(
    <Box>
      <Navbar/>
      <Box>
        Sidebar
      </Box>
      <Box>
        <Component {...pageProps} />
      </Box>
    </Box>
  ) 
}

export default MyApp;
