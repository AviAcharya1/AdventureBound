import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';

const JourneyPage = () => {
  const journeys = [
    {
      title: 'Paris',
      description: 'Explore the city of lights.',
      image: 'paris.jpg'
    },
    {
      title: 'New York',
      description: 'The city that never sleeps.',
      image: 'newyork.jpg'
    },
    // Add more journeys
  ];

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Popular Journeys
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {journeys.map((journey, index) => (
            <Card key={index} style={{ maxWidth: 345, margin: 16 }}>
              <CardMedia
                component="img"
                alt={journey.title}
                height="140"
                image={journey.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {journey.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {journey.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default JourneyPage;
