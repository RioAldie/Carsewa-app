import { Box, Button, styled } from '@mui/material';
import React from 'react';

const MailContent = () => {
  const TitleMail = styled('p')({
    fontSize: '18px',
    color: '#000',
    fontWeight: '600',
    textAlign: 'start',
  });
  const MailDate = styled('p')({
    fontSize: '14px',
    color: '#c4c4c4',
  });
  const MainMail = styled('p')({
    fontSize: '14px',
  });
  const Opening = styled('p')({
    fontSize: '16px',
    fontWeight: '500',
    color: '#000',
  });
  const Closing = styled('p')({
    fontSize: '16px',
    fontWeight: '500',
    color: '#000',
  });
  const ReedemCode = styled('p')({
    fontSize: '16px',
    color: '#000',
    fontWeight: '600',
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TitleMail>
        Discount 20% at Indonesia Independent Days
      </TitleMail>
      <MailDate>10:30 16/August/2020</MailDate>
      <Opening>Hello Sherlin</Opening>
      <MainMail>
        We have best Offer for you at Indonesia Independent Days, You
        could rent any Premium Cars And get Discount 20 % from your
        total Paid.
      </MainMail>
      <ReedemCode>redeem this code : IND17AUG</ReedemCode>
      <Closing>Thank you, enjoy your ride</Closing>
      <Button
        variant="outlined"
        sx={{
          display: 'flex',
          justifySelf: 'flex-end',
          alignSelf: 'flex-end',
          mt: '50px',
        }}
      >
        Readed
      </Button>
    </Box>
  );
};

export default MailContent;
