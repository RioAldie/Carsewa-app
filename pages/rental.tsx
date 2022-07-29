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
      {/* <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          bgcolor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '100px',
        }}
      >
        <Categories />
        {cars.length ? (
          cars.map((car) => {
            return (
              <CarItem
                key={car.carId}
                car={car}
                name={'Mitsubishi Xpander'}
                category={'SUV'}
                image={'mitsubishi_PNG161.png'}
                width={'280'}
                height={'158'}
                seats={6}
                speed={'225/Kmh'}
                transmision={'Automatic'}
                price={350000}
                currency={'IDR'}
              />
            );
          })
        ) : (
          <Typography>No Result</Typography>
        )}
      </Box> */}
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
