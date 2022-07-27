import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          bgcolor: '#1A0000',
          mt: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Image
            src={'/icons/logo-footer.svg'}
            width={173}
            height={60}
          />
          <Typography variant="body2" color={'#d9d9d9'}>
            Jln. Panglima Sudirman No.441 Jakarta Pusat
          </Typography>
          <Typography
            variant="h6"
            color={'#d9d9d9'}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PhoneIcon /> +62895702695858
          </Typography>
        </Box>
      </Box>
    </>
  );
}
