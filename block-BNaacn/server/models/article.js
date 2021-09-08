const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  createAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Articles', articleSchema);
