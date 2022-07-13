import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(()=>{
    setIsSSR(false);
  });
  if(isSSR) return null;
  return(
    <div>
      Navbar
      <div>
        Sidebar
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  ) 
}

export default MyApp;
