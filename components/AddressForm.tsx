import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  const [userData, setUserData] = React.useState({
    firstName: '',
    secondName: '',
    phone: 0,
    email: '',
    city: '',
    shipLocation: '',
  });
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
  React.useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) =>
              handleChange('firstName', e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) =>
              handleChange('secondName', e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="standard"
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Shiping Location"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => handleChange('shipping', e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
