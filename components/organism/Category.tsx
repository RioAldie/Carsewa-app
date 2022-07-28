import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';

const category = [
  'All vehicles',
  'Highest price',
  'Lowest price',
  'Family Car',
  'Automatic',
  'Manual',
  'Luxury Car',
];
export default function Categories() {
  const [isActive, setIsActive] = useState(true);
  const [filter, setFilter] = useState('All vehicles');
  const ButtonStyled = styled(Button)({
    minWidth: '150px',
    height: '45px',
    border: '1px solid #D9D9D9',
    boxShadow: '0px 4px 4px 0px #00000040',
    color: '#ff3951',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '19px',
    ml: '30px',
    mt: '20px',
    textTransform: 'none',
  });
  const active = {
    color: '#fff',
    bgcolor: '#ff3951',
  };
  return (
    <>
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: {
            xs: '300px',
            sm: '200px',
          },
          justifyContent: 'space-around',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '23px',
            color: '#eb1d36',
            alignSelf: 'left',
            display: 'flex',
            justifySelf: 'start',
          }}
        >
          Filter:
        </Typography>
        {category.map((cat) => (
          <ButtonStyled
            variant="outlined"
            sx={cat === filter ? active : null}
            onClick={(e) => setFilter(cat != filter ? cat : filter)}
            key={cat}
          >
            {cat}
          </ButtonStyled>
        ))}
      </Box>
    </>
  );
}
