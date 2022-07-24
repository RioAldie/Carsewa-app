import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface StepProps{
    image: string,
    name: string,
    body: string
}

export default function StepWork(props:StepProps) {
    const {image, name, body } = props;
    return(
        <>
            <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'
                    }}>
                        <Image src={image} height={200} width={200}/>
                        <Typography
                        sx={{
                            fontSize:'22px',
                            fontWeight:'600',
                            
                        }}>{name}</Typography>
                        <Typography variant="body2" 
                        sx={{
                            width:'244px',textAlign:'center',
                            fontSize:'16px',
                            fontWeight:'400',
                            color:'#9E9E9E'
                        }}>
                        {body}</Typography>
                    </Box>
        </>
    )
}