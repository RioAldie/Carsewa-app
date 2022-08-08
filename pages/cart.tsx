import { Scale } from '@mui/icons-material';
import { Box, Button, styled, Typography } from '@mui/material';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpeedIcon from '@mui/icons-material/Speed';
import CarDetail from '../components/organism/CarDetail';
import Image from 'next/image';

const cart = () => {
  const PriceText = styled('p')({
    fontSize: '32px',
    fontWeight: '500',
    color: '#EB1D36',
    lineHeight: '37px',
  });
  const ItemDetail = styled(Typography)({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '24px',
    fontWeight: '500',
    color: '#fff',
    alignItems: 'center',
    width: '170px',
    height: '50px',
    justifyContent: 'space-evenly',
  });

  const ButtonCounter = styled(Button)({
    width: '60px',
    height: '60px',
    borderRadius: '5px',
    fontSize: '24px',
  });
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
              },
              width: '100%',
              p: '20px',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '450px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                minHeight: '200px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                bgcolor: '#EB1D36',
                borderRadius: '10px',
              }}
            >
              <ItemDetail>
                <CarCrashIcon />
                Manual
              </ItemDetail>
              <ItemDetail>
                <AirlineSeatReclineNormalIcon />6 Seats
              </ItemDetail>
              <ItemDetail>
                <DiamondIcon />
                SUV
              </ItemDetail>
              <ItemDetail>
                <SpeedIcon />
                302/Kmh
              </ItemDetail>
            </Box>
            <Box
              sx={{
                width: '500px',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                minHeight: '200px',
                justifyContent: 'space-around',
                ml: '20px',
              }}
            >
              {/* counter */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minWidth: '400px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '23px',
                  }}
                >
                  Rent Days:{' '}
                </Typography>
                <ButtonCounter variant="outlined">+</ButtonCounter>
                <span
                  style={{
                    width: '200px',
                    fontSize: '24px',
                    textAlign: 'center',
                  }}
                >
                  1
                </span>
                <ButtonCounter variant="outlined">-</ButtonCounter>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minWidth: '400px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '23px',
                    textAlign: 'start',
                  }}
                >
                  Total Cost:{' '}
                </Typography>
                <PriceText
                  sx={{
                    textAlign: 'center',
                    width: '350px',
                  }}
                >
                  IDR 500000
                </PriceText>
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default cart;
