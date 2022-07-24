import { Box, Button, styled, Typography } from "@mui/material";
import DaySelect from "./moleculs/day-select";
import LocationSelect from "./moleculs/location-select";

export default function Search() {
    const BoxMain = styled(Box)({
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        border: '2px #c4c4c4 solid',
        borderRadius:'10px',
        alignSelf:'center',
        marginBottom:'20px',
        justifyContent:'space-evenly',
        alignItems:'center'
    })
    return(
        
        
            <BoxMain sx={{width:{md:'80%',sm:'80%'},display:{xs:'none',sm:'flex'}}}>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Typography variant="h6" fontWeight={'bold'} fontSize={16}>Location</Typography>
                    <LocationSelect/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography variant="h6" fontWeight={'bold'} fontSize={16}>Pick-up Date</Typography>
                    <DaySelect/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography variant="h6" fontWeight={'bold'} fontSize={16}>Return Date</Typography>
                <DaySelect/>
                </Box>
                <Box>
                    <Button variant="contained">Search</Button>
                </Box>
                
            </BoxMain>    

    
    )
}