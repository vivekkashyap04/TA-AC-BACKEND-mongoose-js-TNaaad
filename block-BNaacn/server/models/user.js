const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:{type:String , lowercase:true},
    age: { type: Number, default:0},
    password:{ type:String, minimum:5},
    createdAt:{type:Date , default:new Date()},
    favourites:[String]
})

module.exports = mongoose.model('User',userSchema);