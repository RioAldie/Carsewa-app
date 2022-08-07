import { Scale } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
import CarDetail from '../components/organism/CarDetail';

const cart = () => {
  return (
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
          minHeight: '90vh',
          background: '#fff',
          display: 'flex',
          justifySelf: 'center',
          alignSelf: 'center',
          mt: '100px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CarDetail />
      </Box>
    </Box>
  );
};

export default cart;
