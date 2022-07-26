import { Box, styled, Typography } from "@mui/material"

export default function Discover(){
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
    const CarDisplay = styled('div')({
        width:'322px',
        height:'363px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'1px solid #d9d9d9',
        borderRadius:'25px'
    })
    return(
        <>
                    <Typography variant="h5"sx={{
                        fontWeight:'600',
                        fontSize:'24px',
                        lineHeight:'28px',
                        color:'#9E9E9E',
                        textAlign:'center',
                        mt:'150px'
                        }}>Popular Rental Deals
                    </Typography>
                    <MainText>
                        Most<RedText> Popular </RedText> Car Rental Deals
                    </MainText>
                    <Box sx={{
                        display:'flex',
                        flexDirection:{
                        xs:'column', sm:'column',md:'row'
                        },
                        alignItems:'center',
                        minHeight:'80vh',
                        width:'100%',
                        justifyContent:'space-evenly',
                        border:'solid 1px #000'
                    }}>
                        <Box sx={{
                            display:'flex',
                            flexDirection:'column',
                            width:'353px',
                            height:'453px',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            border: '1px solid #9E9E9E24',
                            alignItems:'center',
                            borderRadius:'18px',
                            justifyContent:'space-evenly'
                        }}>
                            <CarDisplay>

                            </CarDisplay>
                            <Box>

                            </Box>
                        </Box>

                    </Box>
        </>
    )
}