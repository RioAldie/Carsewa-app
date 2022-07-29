import { Box, Button, styled, Typography } from '@mui/material';
import Image from 'next/image';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpeedIcon from '@mui/icons-material/Speed';
import { Car } from '../../type';

interface CarItemProps {
  name: string;
  category: string;
  image: string;
  width: string;
  height: string;
  seats: number;
  speed: string;
  transmision: string;
  price: number;
  currency: string;
  car: Car;
}
export default function CarItem(props: CarItemProps) {
  const {
    name,
    category,
    image,
    width,
    height,
    seats,
    speed,
    transmision,
    currency,
    price,
    car,
  } = props;
  const ItemDetail = styled(Typography)({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '20px',
    fontWeight: '600',
    color: '#9e9e9e',
    alignItems: 'center',
    width: '100px',
    height: '50px',
  });
  const PriceText = styled('p')({
    fontSize: '32px',
    fontWeight: '500',
    color: '#EB1D36',
    lineHeight: '37px',
  });
  const DayText = styled('span')({
    fontSize: '20px',
    color: '#9e9e9e',
    fontWeight: '500',
    lineHeight: '23px',
  });
  return (
    <>
      <Box
        sx={{
          width: '90%',
          minHeight: '254px',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'row',
          },
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          boxShadow: '0px 4px 4px 0px #00000040',
          borderRadius: '10px',
          mt: '40px',
          alignItems: 'center',
          p: '20px',
        }}
      >
        <div>
          <Image
            src={`/image/${image}`}
            width={width}
            height={height}
          />
        </div>
        <Box
          sx={{
            width: '220px',
            height: '215px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#000',
              mb: '20px',
              mt: '20px',
            }}
          >
            {name}
          </Typography>
          <ItemDetail>
            <MinorCrashIcon
              sx={{
                fontSize: '28px',
                color: '#9e9e9e',
                height: '25px',
              }}
            />
            {transmision}
          </ItemDetail>
          <ItemDetail
            sx={{
              color: '#EB1D36',
            }}
          >
            <AirlineSeatReclineNormalIcon
              sx={{
                fontSize: '28px',
                color: '#EB1D36',
                height: '25px',
              }}
            />
            {seats} Seats
          </ItemDetail>
          <ItemDetail>
            <DiamondIcon
              sx={{
                fontSize: '28px',
                color: '#9e9e9e',
                height: '25px',
              }}
            />
            {category}
          </ItemDetail>
          <ItemDetail>
            <SpeedIcon
              sx={{
                fontSize: '28px',
                color: '#9e9e9e',
                height: '25px',
              }}
            />
            {speed}
          </ItemDetail>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <PriceText>
            {currency} {price}
            <DayText>/Day</DayText>
          </PriceText>
          <Button
            sx={{
              width: '259px',
              height: '48px',
              bgcolor: '#EB1D36',
              borderRadius: '32px',
            }}
            variant="contained"
          >
            continue
          </Button>
        </Box>
      </Box>
    </>
  );
}
