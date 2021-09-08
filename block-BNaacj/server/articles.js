const mongoose = require('mongoose');
var schema = mongoose.Schema;

const address = new schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: schema.Types.ObjectId,
});
