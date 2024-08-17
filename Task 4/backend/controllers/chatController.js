const Message = require('../models/Message'); // Adjust path according to your project structure
const Room = require('../models/Room'); // Adjust path according to your project structure

// Send a message
const sendMessage = async (req, res) => {
  const { room, text } = req.body;
  const userId = req.user.id;

  try {
    const message = new Message({
      text,
      room,
      sender: userId,
      timestamp: new Date(),
    });
    await message.save();

    res.json(message);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get messages from a room
const getMessages = async (req, res) => {
  const { room } = req.params;

  try {
    const messages = await Message.find({ room }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get rooms (if applicable)
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { sendMessage, getMessages, getRooms };
