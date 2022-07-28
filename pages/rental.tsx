import { Box, Button, CardMedia } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Search, { SearchMobile } from '../components/Seacrh';

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
      <Banner />
      <Content />
    </>
  );
};

export default Rental;
