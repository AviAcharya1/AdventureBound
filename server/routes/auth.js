const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.post('/register', authMiddleware, adminMiddleware, register);
router.post('/login', login);

module.exports = router;
