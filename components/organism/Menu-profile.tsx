import { Box, Button, styled } from '@mui/material';
import { useState } from 'react';

export default function ProfileBar() {
  const [bar, setBar] = useState('Profile');
  const AllMenuProfile = [
    'Profile',
    'Edit',
    'Bank',
    'Status',
    'Mail',
  ];
  const active = {
    color: '#fff',
    backgroundColor: '#FFFFFF4A',
  };
  const MenuProfile = styled(Box)({
    width: '90%',
    height: '56px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '20px',
    backgroundColor: '#EB1D36',
    borderRadius: '5px',
    alignItems: 'center',
    marginTop: '20px',
  });
  const MenuItem = styled(Button)({
    width: '80px',
    height: '40px',
    color: '#FFFFFF87',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '550',
    lineHeight: '24',
  });
  return (
    <>
      <MenuProfile>
        {AllMenuProfile.map((item) => {
          return (
            <MenuItem
              key={item}
              sx={item === bar ? active : null}
              onClick={(e) => setBar(item != bar ? item : bar)}
            >
              {item}
            </MenuItem>
          );
        })}
      </MenuProfile>
    </>
  );
}
