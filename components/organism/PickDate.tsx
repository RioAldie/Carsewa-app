import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import DaySelect from '../moleculs/day-select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Link from 'next/link';
import useRentStore from '../../store/rentStore';

interface PickDateProps {
  location: string;
  rentalData: {};
}

const PickDate = (props: PickDateProps) => {
  const { location, rentalData } = props;
  const { rentDetail, setRentDetail } = useRentStore();
  const [pickup, setPickup] = useState<Date | null | undefined>();
  const [returnDate, setReturnDate] = useState<
    Date | null | undefined
  >();

  const getPickUp = (date: Date | null) => {
    setPickup(date);
    console.log(date);
  };
  const getReturnDate = (date: Date | null) => {
    setReturnDate(date);
    console.log(date);
  };
  const setRentalOrderCheckout = () => {
    const date = { pickup: pickup, return: returnDate };
    const newrent = { ...rentalData, date };

    setRentDetail(newrent);
  };
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            disabled
          >
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={location}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={location}>{location}</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={pickup}
            onChange={(newValue) => {
              setPickup(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
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
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={returnDate}
            onChange={(newValue) => {
              setReturnDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box>
        <Link href={'/checkout'}>
          <Button
            variant="contained"
            sx={{
              height: '50px',
              fontWeight: '500',
              borderRadius: '11px',
              mt: '10px',
              width: '250px',
            }}
            onClick={() => setRentalOrderCheckout()}
          >
            {' '}
            Checkout
          </Button>
        </Link>
      </Box>
    </BoxMain>
  );
};

export default PickDate;
