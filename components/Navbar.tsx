import {
  AppBar,
  Box,
  List,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Link from 'next/link';

export default function Navbar() {
  const Navtext = styled(Typography)({
    color: '#000',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
  });
  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: '#fff' }}>
          <Toolbar
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Link href={'/'}>
              <Box
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={'/icons/carsewa-logo.svg'}
                  height={30}
                  width={103}
                />
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block' },
              }}
            >
              <List sx={{ display: 'flex', flexDirection: 'row' }}>
                <ListItemButton>
                  <Navtext>Become a Renter</Navtext>
                </ListItemButton>
                <ListItemButton>
                  <Navtext>Renter Deals</Navtext>
                </ListItemButton>
                <ListItemButton>
                  <Navtext>How it Works</Navtext>
                </ListItemButton>
                <ListItemButton>
                  <Navtext>Why Chosen us</Navtext>
                </ListItemButton>
                <Link href={'/signin'}>
                  <ListItemButton>
                    <Navtext
                      sx={{ color: '#EB1D36', fontSize: '20px' }}
                    >
                      Login
                    </Navtext>
                  </ListItemButton>
                </Link>
              </List>
            </Box>
            <Box
              sx={{
                display: { xs: 'block', sm: 'block', md: 'none' },
              }}
            >
              <MenuOpenRoundedIcon
                fontSize="large"
                sx={{ color: '#EB1D36' }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
