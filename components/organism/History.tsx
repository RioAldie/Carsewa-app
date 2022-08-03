import { Box, styled, Typography } from '@mui/material';
import HistoryItem from '../moleculs/history-item';

const History = () => {
  const HeadText = styled(Typography)({
    fontSize: '18px',
    fontWeight: '500',
    color: '#9E9E9E',
  });
  return (
    <>
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
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            height: {
              xs: '300px',
              sm: '200px',
            },
            justifyContent: 'space-around',
          }}
        >
          <HeadText
            sx={{
              width: '250px',

              textAlign: 'center',
            }}
          >
            Car
          </HeadText>
          <HeadText
            sx={{
              width: '150px',
              textAlign: 'center',
            }}
          >
            Status
          </HeadText>
          <HeadText
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
              width: '150px',
              textAlign: 'center',
            }}
          >
            Pickup
          </HeadText>
          <HeadText
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
              width: '150px',
              textAlign: 'center',
            }}
          >
            Return
          </HeadText>
          <HeadText
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
              width: '150px',
              textAlign: 'center',
            }}
          >
            Location
          </HeadText>
          <HeadText
            sx={{
              width: '150px',
              textAlign: 'center',
            }}
          >
            Paid
          </HeadText>
        </Box>
      </Box>
      <HistoryItem
        carname={'Honda CR-V Black edition'}
        image={'/image/honda_PNG102934.png'}
        status={'active'}
        pickdate={'22 Aug'}
        returndate={'29 Aug'}
        location={'Surabaya'}
        paid={'IDR 500000'}
      />
      <HistoryItem
        carname={'Honda Accord 2022'}
        image={'/image/honda_PNG10330.png'}
        status={'active'}
        pickdate={'10 Jun'}
        returndate={'11 Jun'}
        location={'Jakarta'}
        paid={'IDR 499000'}
      />
    </>
  );
};

export default History;
