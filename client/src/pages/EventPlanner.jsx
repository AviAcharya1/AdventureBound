import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const EventPlanner = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Event Planner
        </Typography>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: 'Event 1', date: '2023-06-01' },
            { title: 'Event 2', date: '2023-06-02' },
          ]}
        />
        <Button variant="contained" color="primary" style={{ marginTop: 16 }}>
          Add New Event
        </Button>
      </Box>
    </Container>
  );
};

export default EventPlanner;
