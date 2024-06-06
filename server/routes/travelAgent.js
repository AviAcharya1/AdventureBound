const express = require('express');
const router = express.Router();
const { authMiddleware, travelAgentMiddleware } = require('../middlewares/authMiddleware');

// Example endpoint for travel agents
router.get('/dashboard', authMiddleware, travelAgentMiddleware, (req, res) => {
  res.send('Travel agent dashboard');
});

module.exports = router;
