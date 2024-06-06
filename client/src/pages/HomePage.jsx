import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Welcome to Travel Planner
        </Typography>
        <Typography variant="body1" paragraph>
          Discover new journeys, plan your trips, and make the most of your travels.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
