import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import ProfileBar from '../components/organism/Menu-profile';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProfilePreview from '../components/organism/Profile-preview';
import { useState } from 'react';
import EditProfile from '../components/organism/Edit-profile';
import Head from 'next/head';
import Payments from '../components/organism/Payments';
import History from '../components/organism/History';

export default function Profile() {
  const [view, setView] = useState('edit');
  return (
    <>
      <Head>
        <title>carsewa-profile</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/icons/logo-cs.svg"
        ></link>
      </Head>
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
            mb: '20px',
            pb: '40px',
            bgcolor: '#fff',
            mt: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <ProfileBar />
          {view === 'profile' ? <ProfilePreview /> : null}
          <History />
        </Box>
      </Box>
    </>
  );
}
