import { PhotoCamera } from '@mui/icons-material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import useUserStore from '../../store/userStore';
import useAuthStore from '../../store/authStore';

const EditProfile = () => {
  const [isChange, setIsChange] = useState(false);
  const { userData, addUserData } = useUserStore();
  const { userProfile, addUser } = useAuthStore();
  const [profile, setProfile] = useState({
    username: userData.username,
    password: userData.password,
    email: userData.email,
    location: userData.city,
    image: userProfile.image,
  });
  const ButtonEdit = () => {
    return (
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
    );
  };
  return (
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
        mt: {
          xs: '30px',
          sm: '50px',
          md: '100px',
        },
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
          src={
            profile.image != null
              ? profile.image
              : '/image/avatar-2.png'
          }
          width={100}
          height={100}
        />
        <Box>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
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
            width: '350px',
          }}
        >
          <TextField
            label="Username"
            defaultValue={
              profile.username != null
                ? profile.username
                : 'Type your username'
            }
            fullWidth
            sx={{
              mt: '20px',
            }}
            onChange={(e) => setIsChange(true)}
          />
          <TextField
            id="outlined-read-only-input"
            label="Password"
            defaultValue={
              profile.password != null
                ? profile.password
                : 'Type your password'
            }
            type={'password'}
            fullWidth
            sx={{
              mt: '20px',
            }}
            onChange={(e) => setIsChange(true)}
          />
          <TextField
            id="outlined-read-only-input"
            label="Email"
            defaultValue={profile.email}
            fullWidth
            sx={{
              mt: '20px',
            }}
            onChange={(e) => setIsChange(true)}
          />
          <TextField
            id="outlined-read-only-input"
            label="Location"
            defaultValue={profile.location}
            fullWidth
            sx={{
              mt: '20px',
            }}
            onChange={(e) => setIsChange(true)}
          />
          {isChange ? <ButtonEdit /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
