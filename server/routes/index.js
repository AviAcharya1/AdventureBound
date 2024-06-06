const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const journeyController = require('../controllers/journeyController');
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

// Auth Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Journey Routes
router.get('/journeys', authMiddleware(['user', 'travelAgent']), journeyController.getJourneys);
router.post('/journeys', authMiddleware(['travelAgent']), journeyController.createJourney);

// Event Routes
router.get('/events', authMiddleware(['user', 'travelAgent']), eventController.getEvents);
router.post('/events', authMiddleware(['travelAgent']), eventController.createEvent);

// Admin Routes
router.get('/admin/users', authMiddleware(['admin']), authController.getAllUsers);

module.exports = router;
