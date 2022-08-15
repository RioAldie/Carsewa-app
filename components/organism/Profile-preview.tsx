import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function ProfilePreview() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          width: '90%',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '285px',
            height: '325px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Image
            src={'/image/avatar-sz.png'}
            width={100}
            height={100}
          />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <VerifiedIcon
              sx={{
                color: '#DF00E3',
              }}
            />{' '}
            Sherlin Tzu
          </Typography>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Jakarta, Indonesia
          </Typography>
          <Image src={'/image/cc-png.png'} width={200} height={121} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '70px',
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
              width: '350px',
            }}
          >
            <TextField
              label="No. Rekening"
              defaultValue="7292201616616"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
            <TextField
              label="Bank"
              defaultValue="Bank Rakyat Indonesia"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
            <TextField
              label="Nama Pemilik"
              defaultValue="Sherlina Tzuyu"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
            <TextField
              label="Username"
              defaultValue="Sherlina Tzu"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
            <TextField
              label="Password"
              defaultValue="Sherlina Tzuyu"
              type={'password'}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
            <TextField
              label="Email"
              defaultValue="Sherlitzu@gmail.com"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
            <TextField
              label="Location"
              defaultValue="Jakarta"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                mt: '20px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
