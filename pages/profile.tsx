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
import { useEffect, useState } from 'react';
import EditProfile from '../components/organism/Edit-profile';
import Head from 'next/head';
import Payments from '../components/organism/Payments';
import History from '../components/organism/History';
import Mails from '../components/organism/Mails';
import axios from 'axios';
import { Userdata } from '../type';
import useUserStore from '../store/userStore';
import useAuthStore from '../store/authStore';

interface ProfileProps {
  users: Userdata[];
}
export default function Profile({ users }: ProfileProps) {
  const [actived, setActived] = useState('Profile');
  const { userData, addUserData } = useUserStore();
  const { userProfile, addUser } = useAuthStore();

  const getUserById = () => {
    const uid = userProfile._id;
    users.forEach((user) => {
      if (uid === user.uid) {
        return addUserData(user);
      }
    });
  };
  useEffect(() => {
    getUserById();
  }, [userProfile]);

  const SectionActive = (actived: string) => {
    if (actived === 'Profile') {
      return <ProfilePreview />;
    }
    if (actived === 'Edit') {
      return <EditProfile />;
    }
    if (actived === 'Bank') {
      return <Payments />;
    }
    if (actived === 'Status') {
      return <History />;
    }
    if (actived === 'Mail') {
      return <Mails />;
    }
  };
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
          <ProfileBar actived={actived} setActived={setActived} />
          {SectionActive(actived)}
        </Box>
      </Box>
    </>
  );
}
export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/user');
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
};
