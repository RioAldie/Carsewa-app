import { Box, styled } from "@mui/material";
import { height } from "@mui/system";
import Image from "next/image";

export default function Services(){
    const ImageStyle = styled(Image)({
        position:'absolute'
    })
    return(
        <>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                minHeight:'100vh',
                width:'100%',
                border:'solid 1px #000'
            }}>
                <Box>
                    <Image src={'/image/thum-service.png'} height={428} width={561}/>
                </Box>
                <Box>

                </Box>
            </Box>
        </>
    )
}