import { AppBar, Box, List, ListItemButton, styled, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

export default function Navbar () {

  const Navtext = styled(Typography)({
    color:'#000',
    fontFamily:'roboto',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:'14px'
  })
  return(
    <>
      <Box>
        <AppBar sx={{bgcolor:'#fff'}}>
          <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}>
            <Box>
              <Image src={'/icons/carsewa-logo.svg'} height={30} width={103}/>
            </Box>
            <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
              <List sx={{display:'flex', flexDirection:'row'}}> 
                  <ListItemButton >
                      <Navtext>
                        Become a renter
                      </Navtext>
                  </ListItemButton>
                  <ListItemButton>
                      <Navtext>
                        Renter Deals
                      </Navtext>
                  </ListItemButton>
                  <ListItemButton>
                      <Navtext>
                        How it Works
                      </Navtext>
                  </ListItemButton>
                  <ListItemButton>
                      <Navtext>
                        Why chosen us
                      </Navtext>
                  </ListItemButton>
                  <ListItemButton>
                      <Navtext sx={{color:'#EB1D36',fontSize:'20px'}}>
                        Login
                      </Navtext>
                  </ListItemButton>
              </List>
            </Box>
            <Box sx={{display:{xs:'block',sm:'block',md:'none'}}}>
              <MenuOpenRoundedIcon fontSize="large" sx={{color:'#EB1D36'}}/>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}