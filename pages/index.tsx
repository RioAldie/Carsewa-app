import { Box, CssBaseline } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Discover from '../components/Discover';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Search, { SearchMobile } from '../components/Seacrh';
import Services from '../components/Services';
import Steps from '../components/Steps';

const Home: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>carsewa</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/icons/logo-cs.svg"
        ></link>
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          mt={10}
          sx={{
            display: 'flex',
            flexDirection: { sm: 'column', md: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Hero />
          <Box
            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <Image
              src={'/image/thum-carsewa.png'}
              height={600}
              width={750}
            />
          </Box>
        </Box>

        <Search />
        <SearchMobile />
        <Steps />
        <Services />
        <Discover />
      </Box>
    </>
  );
};

export default Home;
