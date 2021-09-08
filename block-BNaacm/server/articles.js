const mongoose = require('mongoose');
const schema = mongoose.Schema;

const articlesSchema = new schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Articles', articlesSchema);
