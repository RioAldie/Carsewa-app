import {
  AppBar,
  Box,
  List,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
  Avatar,
  Button,
} from '@mui/material';
import Image from 'next/image';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import useAuthStore from '../store/authStore';
import Link from 'next/link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { googleLogout } from '@react-oauth/google';

export default function Navbar() {
  const user = false;
  const { userProfile, addUser, removeUser } = useAuthStore();
  const Navtext = styled(Typography)({
    color: '#000',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
  });
  const UserAvatar = (props: any) => {
    const { userName, image } = props;
    return (
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          mr: '10px',
        }}
      >
        <Avatar
          src={image}
          sx={{ width: 24, height: 24, mr: '5px' }}
        />
        <Typography>{userName}</Typography>
      </Button>
    );
  };
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

                {userProfile ? (
                  <div>
                    <Link href={'/profile'}>
                      <a>
                        <UserAvatar
                          userName={userProfile.userName}
                          image={userProfile.image}
                        />
                      </a>
                    </Link>
                    <Link href={'/signin'}>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          googleLogout();
                          removeUser();
                        }}
                      >
                        <ExitToAppIcon />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Link href={'/signin'}>
                    <ListItemButton>
                      <Navtext
                        sx={{ color: '#EB1D36', fontSize: '20px' }}
                      >
                        Login
                      </Navtext>
                    </ListItemButton>
                  </Link>
                )}
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
