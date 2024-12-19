import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2024 Paradise Hotel. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
