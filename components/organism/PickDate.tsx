import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import DaySelect from '../moleculs/day-select';
import LocationSelect from '../moleculs/location-select';
import SearchIcon from '@mui/icons-material/Search';

const PickDate = () => {
  const BoxMain = styled(Box)({
    minHeight: '130px',
    display: 'flex',
    flexDirection: 'row',
    border: '3px solid #9E9E9E24',
    borderRadius: '10px',
    alignSelf: 'center',
    marginBottom: '100px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxShadow: '0px 4px 4px 0px #00000040',
    flexWrap: 'wrap',
    marginTop: '40px',
    backgroundColor: '#fff',
  });
  return (
    <BoxMain
      sx={{
        width: '100%',
        display: { xs: 'none', sm: 'none', md: 'flex' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Location
        </Typography>
        <LocationSelect />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Pick-up Date
        </Typography>
        <DaySelect />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Return Date
        </Typography>
        <DaySelect />
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            height: '50px',
            fontWeight: '500',
            borderRadius: '11px',
            mt: '10px',
            width: '250px',
          }}
        >
          {' '}
          Checkout
        </Button>
      </Box>
    </BoxMain>
  );
};

export default PickDate;