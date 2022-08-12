import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import useRentStore from '../store/rentStore';
import useAuthStore from '../store/authStore';

const steps = [
  'Shipping address',
  'Payment details',
  'Review your order',
];
interface getStepContentProps {
  handleChange: (key: any, value: any) => void;
}
// function getStepContent(step: number,action: getStepContentProps) {
//   switch (step) {
//     case 0:
//       return <AddressForm/>;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { rentDetail, setRentDetail } = useRentStore();
  const { userProfile, addUser } = useAuthStore();
  const [dataCheckout, setDataCheckout] = React.useState({});
  const [userData, setUserData] = React.useState({
    firstName: '',
    secondName: '',
    phone: 0,
    email: '',
    city: '',
    shipLocation: '',
  });
  const getFirstDataCheckout = (userdata: {}) => {
    const newobj = { rentDetail, userProfile, userdata };

    setDataCheckout(newobj);
  };
  const getDataCheckout = (object: {}) => {
    const newobj = { ...dataCheckout, object };
    console.log(newobj);
    //setDataCheckout({...dataCheckout,object})
  };
  const handleChange = (key: any, value: any) => {
    if (key === 'firstName') {
      setUserData((prev) => ({ ...prev, firstName: value }));
    }
    if (key === 'secondName') {
      setUserData((prev) => ({ ...prev, secondName: value }));
    }
    if (key === 'phone') {
      setUserData((prev) => ({ ...prev, phone: value }));
    }
    if (key === 'email') {
      setUserData((prev) => ({ ...prev, email: value }));
    }
    if (key === 'city') {
      setUserData((prev) => ({ ...prev, city: value }));
    }
    if (key === 'shipping') {
      setUserData((prev) => ({ ...prev, shipLocation: value }));
    }
  };
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <AddressForm handleChange={handleChange} />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  };
  const handleNext = () => {
    if (activeStep === 0) {
      getFirstDataCheckout(userData);
    }
    if (activeStep === 1) {
      console.log('dekdek');
    }
    if (activeStep === 2) {
      console.log('turuu');
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Head>
        <title>carsewa-checkout</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/icons/logo-cs.svg"
        ></link>
      </Head>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your
                  order confirmation, and will send you an update when
                  your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? 'Finish'
                      : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </>
  );
}
