// const express = require('express');
// const router = express.Router();
// const { authMiddleware } = require('../middlewares/authMiddleware');

// // Example endpoint for users
// router.get('/profile', authMiddleware, (req, res) => {
//   res.send('User profile');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser); // Ensure registerUser is a function
router.post('/login', userController.loginUser); // Ensure loginUser is a function

module.exports = router;
