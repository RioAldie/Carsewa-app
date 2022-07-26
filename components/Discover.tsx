import { Box, Button, styled, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import Image from 'next/image';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PopularItem from './moleculs/popular-item';

export default function Discover() {
  const MainText = styled('p')({
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '38px',
    color: '#000',
    textAlign: 'center',
  });
  const RedText = styled('span')({
    color: '#EB1D36',
  });
  const ButtonStyled = styled(Button)({
    textTransform: 'none',
    width: '370px',
    height: '58px',
    backgroundColor: '#fff',
    borderRadius: '28px',
    border: '2px solid #9E9E9E24',
    boxShadow: ' 0px 4px 4px 0px #00000040',
  });
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#9E9E9E',
          textAlign: 'center',
          mt: '150px',
        }}
      >
        Popular Rental Deals
      </Typography>
      <MainText>
        Most<RedText> Popular </RedText> Car Rental Deals
      </MainText>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
          alignItems: 'center',
          minHeight: '70vh',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <PopularItem
          image={'maserati_PNG15.png'}
          name={'Maserati MC20 Cielo'}
          price={'$1200'}
          category={'Luxury Car'}
          seats={'2'}
          transmisi={'Manual'}
          speed={'346/Kmh'}
          height={122}
          widht={250}
        />
        <PopularItem
          image={'bmw_PNG1695.png'}
          name={'BMW M3 Series Sedan'}
          price={'$999'}
          category={'Premium'}
          seats={'2'}
          transmisi={'Automatic'}
          speed={'306/Kmh'}
          height={188}
          widht={250}
        />
        <PopularItem
          image={'audi-yellow.png'}
          name={'Audi A6 2020'}
          price={'$899'}
          category={'Premium'}
          seats={'4'}
          transmisi={'Automatic'}
          speed={'280/Kmh'}
          height={142}
          widht={250}
        />
        <PopularItem
          image={'honda_PNG10330.png'}
          name={'Honda Accord Sedan 2022'}
          price={'$469'}
          category={'Premium'}
          seats={'4'}
          transmisi={'Automatic'}
          speed={'265/Kmh'}
          height={188}
          widht={250}
        />
      </Box>
      <ButtonStyled
        variant="outlined"
        sx={{
          display: 'flex',
          alignSelf: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#ff3951',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          Show All Vehicles <ArrowRightAltIcon />
        </Typography>
      </ButtonStyled>
    </>
  );
}
