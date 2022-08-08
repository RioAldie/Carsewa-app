import * as React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import CarDetail from '../components/organism/CarDetail';
import CounterCheckout from '../components/organism/CounterCheckout';
import Head from 'next/head';
import PickDate from '../components/organism/PickDate';

export default function Cart() {
  return (
    <>
      <Head>
        <title>carsewa-cart</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/icons/logo-cs.svg"
        ></link>
      </Head>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          maxHeight: '200vh',
          bgcolor: '#F3F3F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            minHeight: '100vh',
            background: '#fff',
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center',
            mt: '100px',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <CarDetail />
          <Box
            sx={{
              width: '95%',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CounterCheckout />
            <PickDate />
          </Box>
        </Box>
      </Box>
    </>
  );
}
