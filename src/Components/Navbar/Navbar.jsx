import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom'; // Using NavLink for active route styling

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Paradise Hotel
        </Typography>
        <Button color="inherit" component={NavLink} to="/" end>
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/services">
          Services
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
