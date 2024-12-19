const User = require('../models/User');

exports.saveLayout = async (req, res) => {
  const { layout } = req.body;
  const userId = req.user.id; // Assuming you have middleware to get user ID from token

  try {
    await User.findByIdAndUpdate(userId, { layout });
    res.status(200).json({ message: 'Layout saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving layout' });
  }
};

exports.loadLayout = async (req, res) => {
  const userId = req.user.id; // Assuming you have middleware to get user ID from token

  try {
    const user = await User.findById(userId);
    res.status(200).json(user.layout);
  } catch (error) {
    res.status(500).json({ message: 'Error loading layout' });
  }
};