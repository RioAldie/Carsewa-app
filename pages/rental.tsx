import { Box, Button, CardMedia } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Search, { SearchMobile } from '../components/Seacrh';
import bgrental from '../public/image/bg-rental.png';

const styleimage = {
  width: '100%',
  height: '464px',
  background: 'url(' + { bgrental } + ')',
};
const Rental: NextPage = () => {
  return (
    <>
      <Head>
        <title>carsewa rental</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/icons/logo-cs.svg"
        ></link>
      </Head>
      <Box
        sx={{
          position: 'absolute',
          top: {
            md: '330px',
            xs: '280px',
          },
          zIndex: '10000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Search />
        <SearchMobile />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* <Image
          src="/image/bg-rental.png"
          alt="Image description"
          width={'1220'}
          height="464"
        /> */}
        <CardMedia
          image="/image/bg-rent.png"
          sx={{
            width: '100%',
            height: '464px',
            zIndex: '-10000',
          }}
        ></CardMedia>
      </Box>
    </>
  );
};

export default Rental;
