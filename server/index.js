const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const journeyRoutes = require('./routes/journeys');
const eventRoutes = require('./routes/events');
const travelAgentRoutes = require('./routes/travelAgent');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/journeys', journeyRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/travelAgent', travelAgentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
