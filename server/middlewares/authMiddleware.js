const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }
  next();
};

exports.travelAgentMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin' && req.user.role !== 'travelAgent') {
    return res.status(403).json({ message: 'Access denied, travel agent only' });
  }
  next();
};
