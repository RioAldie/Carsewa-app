import { Box, styled, Typography } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import Image from "next/image";
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
        width:'282px',
        height:'313px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'1px solid #d9d9d9',
        borderRadius:'25px',
        justifyContent:'space-evenly'
    })
    const PriceText = styled('p')({
        fontSize:'20px',
        fontWeight:'600',
        color:'#000'
    })
    const DayText = styled('span')({
        fontSize:'12px',
        color:'#9e9e9e'
    })
    const BoxDetail = styled('div')({
        display:'flex',
        width:'280px',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        alignItems:'center'
    })
    const ItemDetail = styled('span')({
        display:'flex',
        flexDirection:'row',
        fontSize:'16px',
        fontWeight:'500',
        color:'#9e9e9e',
        alignItems:'center',
        width:'100px',
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
                            width:'303px',
                            height:'403px',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            border: '1px solid #9E9E9E24',
                            alignItems:'center',
                            borderRadius:'18px',
                            justifyContent:'space-evenly'
                        }}>
                            <CarDisplay>
                                <Image src={"/image/maserati_PNG15.png"} width={250} height={130}/>
                                <Typography sx={{
                                    fontSize:'20px',
                                    fontWeight:'600',
                                    color:'#000',
                                    textAlign:'left'
                                }}>
                                    Maserati MC20 Cielo
                                </Typography>
                                <BoxDetail>
                                    <ItemDetail>
                                        <DiamondIcon sx={{
                                            fontSize:'20px',
                                            color:'#9e9e9e'
                                        }}/> Luxury Car
                                    </ItemDetail>
                                    <ItemDetail>
                                        <AirlineSeatReclineNormalIcon sx={{
                                            fontSize:'20px',
                                            color:'#9e9e9e'
                                        }}/> 2 Seats
                                    </ItemDetail>
                                    <ItemDetail>
                                        <MinorCrashIcon sx={{
                                            fontSize:'20px',
                                            color:'#9e9e9e',
                                            height:'16px'
                                        }}/>Manual
                                    </ItemDetail>
                                    <ItemDetail>
                                        <SpeedIcon sx={{
                                            fontSize:'20px',
                                            color:'#9e9e9e'
                                        }}/> 346/kmh
                                    </ItemDetail>
                                    
                                </BoxDetail>
                            </CarDisplay>
                            <Box sx={{
                                display: 'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-evenly',
                                width:'350px'
                            }}>
                                <PriceText>
                                    $1200<DayText>/Day</DayText>
                                </PriceText>
                                <Typography sx={{
                                    fontSize:'16px',
                                    fontWeight:'600',
                                    color:'#ff3951',
                                    display:'flex',
                                    flexDirection:'row',
                                    alignItems:'center'
                                }}>
                                    Rent Now <ArrowRightAltIcon/>
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
        </>
    )
}