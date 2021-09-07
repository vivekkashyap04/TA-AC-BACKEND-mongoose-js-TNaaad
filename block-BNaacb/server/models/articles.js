var mongoose = require('mongoose');
var schema = mongoose.Schema;
var article = new schema({
  name: String,
  user: Object,
});
