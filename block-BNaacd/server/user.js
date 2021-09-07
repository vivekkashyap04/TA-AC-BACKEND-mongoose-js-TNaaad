var mongoose = require('mongoose');
var schema = mongoose.Schema;

var user = new schema({
    name:String,
    email:{type:String},
    age:Number
})