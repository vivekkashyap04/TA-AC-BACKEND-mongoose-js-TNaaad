var mongoose = require('mongoose');
var schema = mongoose.Schema;

var user = new schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
});
