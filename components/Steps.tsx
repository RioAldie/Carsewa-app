import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Steps() {
    return(
        <>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems: 'center',
                marginTop:'100px',
                padding:'20px'
            }}>
                <Typography variant="h5">How it Work</Typography>
                <p>Rent With Following 3 Working Steps</p>
                <Box sx={{
                     display:'flex',
                     flexDirection:'row',
                     alignItems: 'center',
                     border: 'solid 1px #000',
                     width:'100%',
                     minHeight:'200px'
                }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',

                    }}>
                        <Image src={'/icons/step-1.svg'} height={200} width={200}/>
                        <Typography>Chose Location</Typography>
                        <Typography variant="body2">Chose Your Location and Find Your Best Car</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}