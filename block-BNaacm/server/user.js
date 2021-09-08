const mongoose = require('mongoose');
var schema = mongoose.Schema;

const user = new schema({
    name:String,
    age:{type:Number,default:0},
    favourite:[String],
    marks:[Number],
    password:{type:String, maxlength:15, minlength:5},
    createdAt:{type:String,default:new Date()}
})

var User = mongoose.model('User',user);

module.exports = User;