import { Box, Typography } from '@mui/material';
import { Car } from '../type';
import CarItem from './moleculs/car-item';
import Categories from './organism/Category';

interface contentProps {
  cars: Car[];
}
export default function Content(props: contentProps) {
  const { cars } = props;
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
            return <CarItem key={car.carId} car={car} />;
          })
        ) : (
          <Typography>No Result</Typography>
        )}
      </Box>
    </>
  );
}
