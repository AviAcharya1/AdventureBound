const Journey = require('../controllers/journeyController.js');

exports.getJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find();
    res.json(journeys);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createJourney = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newJourney = new Journey({ name, description });
    await newJourney.save();
    res.status(201).json(newJourney);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
