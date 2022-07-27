import { Box, Button, CardMedia, Typography } from '@mui/material';
import Search, { SearchMobile } from '../components/Seacrh';
export default function Banner() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: {
            md: '330px',
            xs: '280px',
          },
          zIndex: '10000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Search />
        <SearchMobile />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            top: '180px',
            color: '#fff',
            width: '100%',
            textAlign: 'center',
            fontSize: {
              md: '44px',
              sm: '38px',
              xs: '36px',
            },
            fontWeight: '700',
            lineHeight: '83px',
          }}
        >
          Enjoy Your Ride With
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {
                md: '44px',
                sm: '38px',
                xs: '36px',
              },
              fontWeight: '700',
              lineHeight: '43px',
              color: '#EB1D36',
            }}
          >
            Carsewa
          </Typography>
        </Typography>
        <CardMedia
          image="/image/bg-rent.png"
          sx={{
            width: '100%',
            height: '464px',
            zIndex: '-10000',
          }}
        ></CardMedia>
      </Box>
    </>
  );
}
