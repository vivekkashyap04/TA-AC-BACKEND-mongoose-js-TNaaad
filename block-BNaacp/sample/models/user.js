const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:String,
    sports:[String]
})

module.exports = mongoose.model('User',userSchema);