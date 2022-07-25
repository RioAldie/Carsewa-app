import { Box, styled, Typography } from "@mui/material";
import { height } from "@mui/system";
import Image from "next/image";
import ServiceItem from "./moleculs/service";

export default function Services(){
    const MainText = styled('p')({
        fontWeight:'600',
        fontSize:'32px',
        lineHeight:'38px',
        color: '#000',
        textAlign:'center'
    })
    const RedText = styled('span')({
        color:'#EB1D36'
    }) 
    return(
        <>  
            
            <Box sx={{
                display:'flex',
                flexDirection:{
                   xs:'column-reverse', sm:'column',md:'row'
                },
                alignItems:'center',
                minHeight:'100vh',
                width:'100%',
                border:'solid 1px #000',
                justifyContent:'space-evenly'
            }}>
                <Box>
                    <Image src={'/image/thum-service.png'} height={428} width={561}/>
                </Box>
                <Box sx={{
                     display:'flex',
                     alignItems:'center',
                     flexDirection:'column'
                }}>
                    <Typography variant="h5"sx={{
                        fontWeight:'600',
                        fontSize:'24px',
                        lineHeight:'28px',
                        color:'#9E9E9E',
                        textAlign:'center',
                        }}>How it Work
                    </Typography>
                    <MainText>
                    We Offer The <RedText> Best</RedText> Experience With Our Rental Deals
                    </MainText>
                    <ServiceItem/>
                </Box>
            </Box>
        </>
    )
}