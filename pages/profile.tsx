import { Box, Button, styled } from '@mui/material';
import ProfileBar from '../components/organism/Menu-profile';

export default function Profile() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          maxHeight: '200vh',
          bgcolor: '#F3F3F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: {
              md: '80%',
              sm: '90%',
              xs: '95%',
            },
            height: '100vh',
            bgcolor: '#fff',
            mt: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ProfileBar />
        </Box>
      </Box>
    </>
  );
}
