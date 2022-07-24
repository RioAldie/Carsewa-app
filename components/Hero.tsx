import { Box, Button, styled, Typography } from "@mui/material";

export default function Hero() {
    const MainText = styled('p')({
        fontSize:'48px',
        color:'#000',
        fontFamily:'Roboto',
        fontWeight:'700',
        maxWidth:'500px',
        maxHeight:'130px',
        lineHeight: '83px'
    })
    const SpanText = styled('span')({
        color:'#EB1D36',
        fontStyle:'italic'
    })
    const SecondText = styled('p')({
        color: '#9E9E9E',
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight:'31px',
        maxWidth:'560px'
    })
    const BoxHero = styled(Box)({
        maWidth:'525px',
        maxHeight:'706px',
        marginLeft:'10%',
        marginTop:'40px',
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    })
    return(
        <>
            <BoxHero >
                <MainText>
                Rental Car with <SpanText>Easy</SpanText> And <SpanText>Quick </SpanText>Steps.
                </MainText>
                <SecondText sx={{
                    fontSize:{md:'24px', xs:'18px'},
                    mt:{xs:'70px',sm:'20px', md:'0px'}
                }}>
                Rent a Car Whenever and Whereever with Carsewa, Easy and Quick Steps,Only find, book and you can Ride a Car .
                </SecondText>
                <Button variant="contained" sx={{bgcolor:'#EB1D36',width:'150px',height:'50px',borderRadius:'10px'}}>Join Now</Button>
            </BoxHero>
        </>
    )
}