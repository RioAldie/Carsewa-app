import { Box, Step, styled, Typography } from "@mui/material";
import Image from "next/image";
import StepWork from "./moleculs/step";

export default function Steps() {
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
                flexDirection:'column',
                alignItems: 'center',
                marginTop:'100px',
                padding:'20px'
            }}>
                <Typography variant="h5"sx={{
                    width:'131px',
                    fontWeight:'600',
                    fontSize:'24px',
                    lineHeight:'28px',
                    color:'#9E9E9E'
                }}>How it Work</Typography>
                <MainText>Rent With Following <RedText>3</RedText>  Working Steps</MainText>
                <Box sx={{
                     display:'flex',
                     flexDirection:{
                        xs: 'column',
                        md:'row'
                     },
                     alignItems: 'center',
                     width:'100%',
                     justifyContent:'space-evenly',
                     minHeight:'200px'
                }}>
                    <StepWork image={'/icons/step-1.svg'} name={"Chose Location"} body={"Chose Your Location and Find Your Best Car"}/>
                    <StepWork image={'/icons/step-2.svg'} name={"Pick-up Date."} body={"Select your Pickup date and Time Your Book Car"}/>
                    <StepWork image={'/icons/step-3.svg'} name={"Book Your Car."} body={"Book Your Car and We Will Driver Directly For You"}/>
                </Box>
            </Box>
        </>
    )
}