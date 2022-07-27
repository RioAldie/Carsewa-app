import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const BoxStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  maxHeight: '250px',
  marginTop: '30px',
});
const TextPrimary = styled(Typography)({
  fontSize: '18px',
  fontWeight: '600',
  color: '#ffff',
});
const ListText = styled(Typography)({
  fontSize: '18px',
  color: '#9e9e9e',
  fontWeight: '400',
});
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '500px',
          maxHeight: '1200px',
          display: 'flex',
          flexDirection: {
            md: 'row',
          },
          justifyContent: 'space-evenly',
          bgcolor: '#1A0000',
          mt: '100px',
          mb: '0',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              md: 'center',
              sm: 'center',
              xs: 'center',
            },
            justifyContent: 'space-evenly',
            width: {
              md: '250px',
              sm: '100%',
              xs: '100%',
            },
            height: '300px',
          }}
        >
          <Image
            src={'/icons/logo-footer.svg'}
            width={173}
            height={60}
          />
          <Typography
            variant="body2"
            color={'#d9d9d9'}
            sx={{
              textAlign: 'center',
            }}
          >
            Jln. Panglima Sudirman No.441 Jakarta Pusat
          </Typography>
          <Typography
            variant="h6"
            color={'#d9d9d9'}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PhoneIcon /> +62895702695858
          </Typography>
        </Box>
        <BoxStyled
          sx={{
            width: {
              md: '250px',
              sm: '100%',
              xs: '100%',
            },
          }}
        >
          <TextPrimary>Our Product</TextPrimary>
          <ListText>Career</ListText>
          <ListText>Cars</ListText>
          <ListText>Features</ListText>
          <ListText>Priceles</ListText>
          <ListText>Banks</ListText>
        </BoxStyled>
        <BoxStyled
          sx={{
            width: {
              md: '250px',
              sm: '100%',
              xs: '100%',
            },
          }}
        >
          <TextPrimary>Resource</TextPrimary>
          <ListText>Guides</ListText>
          <ListText>Help center</ListText>
          <ListText>Partner</ListText>
          <ListText>Developer</ListText>
          <ListText>API service</ListText>
        </BoxStyled>
        <BoxStyled
          sx={{
            width: {
              md: '250px',
              sm: '100%',
              xs: '100%',
            },
          }}
        >
          <TextPrimary>About Carsewa</TextPrimary>
          <ListText>Why chose us</ListText>
          <ListText>Our story</ListText>
          <ListText>Investor</ListText>
          <ListText>Advertise</ListText>
          <ListText>Press Center</ListText>
        </BoxStyled>
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            flexDirection: 'row',
            mt: '50px',
            mb: '40px',
          }}
        >
          <TextPrimary>Follow Us:</TextPrimary>
          <FacebookIcon
            sx={{
              color: '#fff',
              ml: '20px',
            }}
          />
          <InstagramIcon
            sx={{
              color: '#fff',
              ml: '20px',
            }}
          />
          <YouTubeIcon
            sx={{
              color: '#fff',
              ml: '20px',
            }}
          />
        </Box>
      </Box>
    </>
  );
}
