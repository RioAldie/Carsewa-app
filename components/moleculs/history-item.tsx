import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CircleIcon from '@mui/icons-material/Circle';
interface HistoryItemProps {
  carname: string;
  image: string;
  status: string;
  pickdate: string;
  returndate: string;
  location: string;
  paid: string;
}

const HistoryItem = (props: HistoryItemProps) => {
  const {
    carname,
    image,
    status,
    pickdate,
    returndate,
    location,
    paid,
  } = props;
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
        mt: '50px',
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
          {carname}
        </Typography>
        <Image src={image} width={100} height={62} />
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
        {pickdate}
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
        {returndate}
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
        {location}
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
        {paid}
      </Box>
    </Box>
  );
};

export default HistoryItem;
