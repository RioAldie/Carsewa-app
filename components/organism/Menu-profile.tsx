import { Box, Button, styled } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';

interface ProfileBarProps {
  actived: string;
  setActived: React.Dispatch<SetStateAction<string>>;
}
export default function ProfileBar(props: ProfileBarProps) {
  const [bar, setBar] = useState('Profile');
  const { actived, setActived } = props;

  const handleBarActive = (item: string) => {
    setBar(item != bar ? item : bar);
    setActived(item != bar ? item : bar);
  };

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
              onClick={(e) => handleBarActive(item)}
            >
              {item}
            </MenuItem>
          );
        })}
      </MenuProfile>
    </>
  );
}
