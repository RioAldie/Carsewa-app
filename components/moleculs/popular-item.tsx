import { Box, styled, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import Image from 'next/image';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface PopularItemProps {
  image: string;
  name: string;
  price: string;
  category: string;
  seats: string;
  transmisi: string;
  speed: string;
  height: number;
  widht: number;
}
export default function PopularItem(props: PopularItemProps) {
  const {
    image,
    name,
    price,
    category,
    seats,
    transmisi,
    speed,
    height,
    widht,
  } = props;
  const CarDisplay = styled('div')({
    width: '282px',
    height: '313px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #d9d9d9',
    borderRadius: '25px',
    justifyContent: 'space-evenly',
  });
  const PriceText = styled('p')({
    fontSize: '20px',
    fontWeight: '600',
    color: '#000',
  });
  const DayText = styled('span')({
    fontSize: '12px',
    color: '#9e9e9e',
  });
  const BoxDetail = styled('div')({
    display: 'flex',
    width: '280px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  });
  const ItemDetail = styled('span')({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    fontWeight: '500',
    color: '#9e9e9e',
    alignItems: 'center',
    width: '100px',
  });
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '303px',
          height: '403px',
          boxShadow: '0px 4px 4px 0px #00000040',
          border: '1px solid #9E9E9E24',
          alignItems: 'center',
          borderRadius: '18px',
          justifyContent: 'space-evenly',
          mt: '20px',
        }}
      >
        <CarDisplay>
          <Image
            src={`/image/${image}`}
            width={widht}
            height={height}
          />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              textAlign: 'left',
            }}
          >
            {name}
          </Typography>
          <BoxDetail>
            <ItemDetail>
              <DiamondIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                }}
              />
              {category}
            </ItemDetail>
            <ItemDetail>
              <AirlineSeatReclineNormalIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                }}
              />
              {seats} Seats
            </ItemDetail>
            <ItemDetail>
              <MinorCrashIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                  height: '16px',
                }}
              />
              {transmisi}
            </ItemDetail>
            <ItemDetail>
              <SpeedIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                }}
              />
              {speed}
            </ItemDetail>
          </BoxDetail>
        </CarDisplay>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '350px',
          }}
        >
          <PriceText>
            {price}
            <DayText>/Day</DayText>
          </PriceText>
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
            Rent Now <ArrowRightAltIcon />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
