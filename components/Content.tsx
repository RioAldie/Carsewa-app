import { Box } from '@mui/material';
import CarItem from './moleculs/car-item';
import Categories from './organism/Category';

export default function Content() {
  return (
    <>
      <Box
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
        <CarItem
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
      </Box>
    </>
  );
}
