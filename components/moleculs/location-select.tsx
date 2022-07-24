import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function LocationSelect() {
    const [age, setAge] = useState('');
    const location = [
        {
            key: '1',
            value: 'Surabaya'
        },
        {
            key: '2',
            value: 'Bali'
        },
        {
            key: '3',
            value: 'Kediri'
        }
    ]
    const handleChange = (e: SelectChangeEvent) => {
        setAge(e.target.value);
    };
    return(
        <>
        <Box sx={{ minWidth: 120 }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            >
            {
                location.map((loc)=>{
                   return <MenuItem key={loc.key} value={loc.value}>{loc.value}</MenuItem>
                })
            }
            </Select>
        </FormControl>
        </Box>
        </>
    )
}