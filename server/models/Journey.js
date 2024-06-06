const mongoose = require('mongoose');

const JourneySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Journey', JourneySchema);
