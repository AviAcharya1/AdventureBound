import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Travel Planner
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/journey">Journey</Button>
        <Button color="inherit" component={Link} to="/event-planner">Event Planner</Button>
        <Button color="inherit" component={Link} to="/payment">Pro Version</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
