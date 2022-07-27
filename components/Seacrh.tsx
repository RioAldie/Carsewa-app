import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import DaySelect from './moleculs/day-select';
import LocationSelect from './moleculs/location-select';
import SearchIcon from '@mui/icons-material/Search';

export function SearchMobile() {
  return (
    <Box
      sx={{
        display: {
          md: 'none',
          xs: 'flex',
          sm: 'flex',
        },
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '140px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '80px',
          width: '90%',
          border: '3px solid #9E9E9E24',
          boxShadow: '0px 4px 4px 0px #00000040',
          background: '#ffff',
          borderRadius: '5px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          fullWidth
          sx={{
            ml: '10px',
            mr: '10px',
            border: 'none',
          }}
        />
        <Button
          variant="contained"
          sx={{
            mr: '10px',
            width: '156px',
            height: '50px',
            borderRadius: '5px',
          }}
        >
          Cari
        </Button>
      </Box>
    </Box>
  );
}
export default function Search() {
  const BoxMain = styled(Box)({
    minHeight: '130px',
    display: 'flex',
    flexDirection: 'row',
    border: '3px solid #9E9E9E24',
    borderRadius: '10px',
    alignSelf: 'center',
    marginBottom: '20px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxShadow: '0px 4px 4px 0px #00000040',
    flexWrap: 'wrap',
    marginTop: '40px',
  });
  return (
    <BoxMain
      sx={{
        width: { md: '80%', sm: '80%' },
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
          }}
        >
          {' '}
          <SearchIcon /> Search
        </Button>
      </Box>
    </BoxMain>
  );
}
