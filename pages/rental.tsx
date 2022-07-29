import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Content from '../components/Content';
import axios from 'axios';
import { Car } from '../type';
import Categories from '../components/organism/Category';
import CarItem from '../components/moleculs/car-item';

interface RentalProps {
  cars: Car[];
}
const Rental = ({ cars }: RentalProps) => {
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
      <Content cars={cars} />
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
