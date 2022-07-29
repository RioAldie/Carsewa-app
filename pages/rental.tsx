import { Box, Button, CardMedia } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Content from '../components/Content';
import axios from 'axios';

const Rental: NextPage = ({ cars }) => {
  console.log(cars);
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
export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/post');

  return {
    props: {
      cars: data,
    },
  };
};
export default Rental;
