import { Box, Button, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
export default function Signup() {
  return (
    <>
      <Head>
        <title>carsewa-join</title>
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
          minHeight: '100vh',
          maxHeight: '200vh',
          justifyContent: 'space-evenly',
          padding: '20px',
          mt: '50px',
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
          Join and enjoy your ride
        </Typography>
        <TextField
          id="outlined-basic"
          label="Fullname"
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type={'email'}
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type={'password'}
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="ID Card"
          type={'number'}
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="ID driver License"
          type={'number'}
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          sx={{
            maxWidth: '450px',
            minWidth: '360px',
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
              height: '50px',
              fontSize: '22px',
              fontWeight: '00',
            }}
          >
            SIGN UP
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
          Have an Account?{' '}
          <span
            style={{
              color: '#FF3951',
              cursor: 'pointer',
            }}
          >
            Login here
          </span>
        </Typography>
      </Box>
    </>
  );
}
