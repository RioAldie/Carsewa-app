import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/Hero';
import Search from '../components/Seacrh';

const Home: NextPage = () => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column',}}>
      <Box mt={10} sx={{display:'flex', flexDirection:  {sm:'column',md:'row'},justifyContent:'space-between'}}>
        <Hero/>
        <Box  sx={{display:{xs:"none",sm:'none',md:'block'}}}>
          <Image src={'/image/thum-carsewa.png'} height={600} width={750}/>
        </Box>
      </Box>
      <Search/>
    </Box>
    </>

  )
}

export default Home;
