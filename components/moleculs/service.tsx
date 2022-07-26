import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ServiceItemProps{
    primary: string,
    secondary: string,
    icon: string
}
export default function ServiceItem(props: ServiceItemProps){
    const {primary, secondary, icon} = props;
    return(
        <>
             <Box sx={{
                        width:'367px',
                        height: '66px',
                        display: 'flex',
                        flexDirection:'row',
                        justifyContent:'space-evenly',alignItems:'center',
                        mt:'25px'
                    }}>
                        <Image src={`/icons/${icon}`} width={69} height={66}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'16px',
                                fontWeight:'600',
                                lineHeight:'19px'
                            }}>
                                {primary}
                            </Typography>
                            <Typography sx={{
                                fontSize:'14px',
                                lineHeight:'17px',
                                color: '#9e9e9e',
                                fontWeight:'400',
                                maxWidth:'272px'
                            }}>
                                {secondary}
                            </Typography>
                        </Box>
                    </Box>
        </>
    )
}