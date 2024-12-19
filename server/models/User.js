const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String },
  playlists: { type: Array, default: [] },
  layout: { type: Array, default: [] }, // New field for layout
});

module.exports = mongoose.model('User ', userSchema);