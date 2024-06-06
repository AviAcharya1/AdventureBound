const Event = require('../models/Events');

exports.createEvent = async (req, res) => {
  const { title, date } = req.body;

  try {
    const newEvent = new Event({
      title,
      date,
      user: req.user.id
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id }).sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await event.remove();
    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
