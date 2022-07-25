import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ServiceItem(){
    return(
        <>
             <Box sx={{
                        width:'367px',
                        height: '66px',
                        display: 'flex',
                        flexDirection:'row',
                        justifyContent:'space-evenly',alignItems:'center',
                    }}>
                        <Image src={'/icons/piggy-icon.svg'} width={69} height={66}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'16px',
                                fontWeight:'600',
                                lineHeight:'19px'
                            }}>
                                Best Price Guaranted
                            </Typography>
                            <Typography sx={{
                                fontSize:'14px',
                                lineHeight:'17px',
                                color: '#9e9e9e',
                                fontWeight:'400',
                                maxWidth:'272px'
                            }}>
                                Find Lower Price? We'll refund you 100% of the difference
                            </Typography>
                        </Box>
                    </Box>
        </>
    )
}