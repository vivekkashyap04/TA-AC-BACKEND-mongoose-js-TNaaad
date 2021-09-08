const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

var commentsSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectId, ref: User },
    articles: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentsSchema);
