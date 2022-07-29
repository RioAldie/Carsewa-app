import { Box, Typography } from '@mui/material';
import { Car } from '../type';
import CarItem from './moleculs/car-item';
import Categories from './organism/Category';

interface contentProps {
  cars: Car[];
}
export default function Content(props: contentProps) {
  const { cars } = props;
  console.log('cars +>', cars);
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
      </Box>
    </>
  );
}
