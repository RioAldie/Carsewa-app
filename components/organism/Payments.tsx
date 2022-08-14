import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';
import useUserStore from '../../store/userStore';

const Payments = () => {
  const [payment, setPayment] = useState('cc');
  const { userData, addUserData } = useUserStore();
  const [dataPayment, setDataPayment] = useState({
    bank: userData.bank,
    cardName: userData.cardName,
    cardNumber: userData.cardNumber,
  });
  const handleChange = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };
  console.log(dataPayment);
  const DisplayPayment = () => {
    if (payment === 'gopay') {
      return (
        <Box>
          <Image
            src={'/icons/gopay-logo.svg'}
            width={200}
            height={121}
          />
        </Box>
      );
    }
    if (payment === 'cc') {
      return (
        <Box>
          <Image src={'/image/cc-png.png'} width={200} height={121} />
        </Box>
      );
    }
    if (payment === 'paypal') {
      return (
        <Box>
          <Image
            src={'/icons/paypal-logo.svg'}
            width={200}
            height={121}
          />
        </Box>
      );
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
          width: '100%',
          height: '325px',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {DisplayPayment()}
        <Box
          sx={{
            width: '350px',
            height: '150px',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#bfbfbf',
            }}
          >
            Chose payment method:
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Payment Method
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={payment}
              label="Payment Method"
              onChange={handleChange}
            >
              <MenuItem value={'gopay'}>Gopay</MenuItem>
              <MenuItem value={'cc'}>BRI</MenuItem>
              <MenuItem value={'paypal'}>Paypal</MenuItem>
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
            },
            alignItems: 'center',
            width: {
              xs: '350px',
              md: '550px',
            },
          }}
        >
          <TextField
            label="Rek Number or Phone Number*"
            defaultValue="7292201616616"
            fullWidth
            sx={{
              mt: '20px',
            }}
          />
          <TextField
            label="Bank"
            defaultValue="Bank Rakyat Indonesia"
            fullWidth
            sx={{
              mt: '20px',
            }}
          />
          <TextField
            label="Nama Pemilik"
            defaultValue="Sherlina Tzuyu"
            fullWidth
            sx={{
              mt: '20px',
            }}
          />
        </Box>
        <Box
          sx={{
            width: '350px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            mt: '20px',
          }}
        >
          <Button variant="contained" component="label">
            {' '}
            <SaveIcon /> Save{' '}
          </Button>
          <Button variant="outlined" component="label">
            {' '}
            <CancelIcon /> Cancel{' '}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Payments;
