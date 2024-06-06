const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'travelAgent', 'user'], default: 'user' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
