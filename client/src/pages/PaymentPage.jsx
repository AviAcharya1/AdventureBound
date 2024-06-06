import React from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';

const PaymentPage = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Upgrade to Pro Version
        </Typography>
        <Typography variant="body1" paragraph>
          Get access to exclusive features by upgrading to the Pro version.
        </Typography>
        <form>
          <TextField label="Credit Card Number" fullWidth margin="normal" />
          <TextField label="Expiry Date" fullWidth margin="normal" />
          <TextField label="CVV" fullWidth margin="normal" />
          <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: 16 }}>
            Make Payment
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default PaymentPage;
