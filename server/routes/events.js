const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../middlewares/auth');

// @route    POST api/events
// @desc     Create an event
// @access   Private
router.post('/', auth, eventController.createEvent);

// @route    GET api/events
// @desc     Get all user events
// @access   Private
router.get('/', auth, eventController.getEvents);

// @route    DELETE api/events/:id
// @desc     Delete an event
// @access   Private
router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;
