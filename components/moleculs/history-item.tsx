import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CircleIcon from '@mui/icons-material/Circle';

const HistoryItem = () => {
  const StatusActiv = () => {
    return (
      <Box
        sx={{
          width: '112px',
          height: '35px',
          bgcolor: '#40FF1014',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          color: '#35B116',
          justifyContent: 'space-evenly',
        }}
      >
        <CircleIcon sx={{ fontSize: '8px' }} /> active
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '250px',

          justifyContent: 'space-evenly',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            color: '#000',
            fontWeight: '600',
          }}
        >
          Honda CR-V black edition
        </Typography>
        <Image
          src={'/image/honda_PNG102934.png'}
          width={100}
          height={62}
        />
      </Box>
      <Box
        sx={{
          width: '150px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StatusActiv />
      </Box>
      <Box
        sx={{
          width: '150px',

          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: '#000',
          fontWeight: '500',
        }}
      >
        22 Aug
      </Box>
      <Box
        sx={{
          width: '150px',

          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: '#000',
          fontWeight: '500',
        }}
      >
        25 Aug
      </Box>
      <Box
        sx={{
          width: '150px',

          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: '#000',
          fontWeight: '600',
        }}
      >
        Surabaya
      </Box>

      <Box
        sx={{
          width: '150px',
          height: '30px',
          fontSize: '20px',
          color: '#EB1D36',
          fontWeight: '600',

          textAlign: 'center',
        }}
      >
        IDR 500.000
      </Box>
    </Box>
  );
};

export default HistoryItem;
