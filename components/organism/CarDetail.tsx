import { Scale } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
const Title = styled('p')({
  width: '400px',
  height: 'max-content',
  fontSize: '44px',
  lineHeight: '52px',
  color: '#000',
  fontWeight: '600',
  margin: '0',
});
const BodyText = styled('p')({
  width: '400px',
  height: '92px',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '23px',
  color: '#9E9E9E',
  marginTop: '20px',
});
const PriceText = styled('p')({
  fontSize: '32px',
  fontWeight: '500',
  color: '#EB1D36',
  height: '50px',
  lineHeight: '37px',
  margin: '0',
});
const DayText = styled('span')({
  fontSize: '20px',
  color: '#9e9e9e',
  fontWeight: '500',
  lineHeight: '23px',
});
const CarDetail = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          md: 'row',
          sm: 'column',
          xs: 'column',
        },
        width: '90%',
        minHeight: '400px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '500px',
          height: '300px',
          position: 'relative',
        }}
      >
        <Image
          src={'/image/honda_PNG102934.png'}
          layout={'fill'}
          objectFit="contain"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '510px',
          justifyContent: 'flex-start',
          height: '300px',
        }}
      >
        <PriceText
          sx={{
            position: 'relative',
          }}
        >
          IDR 320000
          <DayText>/Day</DayText>
        </PriceText>
        <Title>Honda CR-V Black edition</Title>
        <BodyText>
          The Honda CR-V is a compact crossover SUV manufactured by
          the Japanese automaker Honda since 1995 and introduced in
          the North American market in 1997.
        </BodyText>
      </Box>
    </Box>
  );
};

export default CarDetail;
