const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const articles = new Schema({
    title:String,
    description:String,
    tags:[String],
    likes:{type: Number, default:0},
    author:{type:mongoose.Types.ObjectId,ref:User},
    comments:[String]
},{timestamps:true})

module.exports = mongoose.model('Articles',articles);