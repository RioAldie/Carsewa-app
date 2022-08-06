import { Box, Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createAndGetUser } from '../services';
import useAuthStore from '../store/AuthStore';
import { useRouter } from 'next/router';
export default function Signin() {
  const { userProfile, addUser } = useAuthStore();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>carsewa-login</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/icons/logo-cs.svg"
        ></link>
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifySelf: 'cenetr',
          width: '100%',
          minHeight: '80vh',
          justifyContent: 'space-evenly',
          padding: '20px',
          mt: '50px',
          bgcolor: '#fff',
        }}
      >
        <Image
          src={'/icons/carsewa-logo-full.svg'}
          width={293}
          height={113}
        />
        <Typography
          sx={{
            fontWeight: '700',
            color: '#000',
            fontSize: '35px',
            lineHeight: '45px',
            textAlign: 'center',
          }}
        >
          Login To Your Account
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />

        <GoogleLogin
          onSuccess={(response) => {
            createAndGetUser(response, addUser);
            router.push('/rental');
          }}
          onError={() => {
            console.log('error');
          }}
        />

        <Box
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
            p: '10px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              width: '124px',
              height: '50px',
              fontSize: '22px',
              fontWeight: '00',
            }}
          >
            Login
          </Button>
        </Box>
        <Typography
          sx={{
            fontWeight: '500',
            color: '#000',
            fontSize: '18px',
            textAlign: 'center',
          }}
        >
          Don't have an Account?{' '}
          <Link href={'/signup'}>
            <span
              style={{
                color: '#FF3951',
                cursor: 'pointer',
              }}
            >
              Join here
            </span>
          </Link>
        </Typography>
      </Box>
    </>
  );
}
