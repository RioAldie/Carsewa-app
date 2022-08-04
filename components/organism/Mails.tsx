import { Box, Typography } from '@mui/material';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import React from 'react';
import MailContent from '../moleculs/mail-content';

const Mails = () => {
  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box
        sx={{
          width: '30%',
          height: '600px',
          displayL: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '50px',
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            p: '5px',
            background: '#9E9E9E24',
            borderRadius: '5px',
            mt: '50px',
            cursor: 'pointer',
          }}
        >
          <MarkEmailUnreadIcon
            sx={{
              color: '#000',
            }}
          />{' '}
          <Typography
            sx={{
              lineHeight: '16px',
              fontSize: '14px',
              ml: '10px',
              fontWeight: '600',
            }}
          >
            Disc 20% independent days
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '60%',
          height: '600px',
          displayL: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          padding: '20px',
        }}
      >
        <MailContent />
      </Box>
    </Box>
  );
};

export default Mails;
