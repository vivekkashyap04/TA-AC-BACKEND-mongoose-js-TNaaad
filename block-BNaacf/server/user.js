const mongoose = require('mongoose');
var schema = mongoose.Schema;

const user = new schema({
    name:String,
    age:{type:Number,default:0},
    favourite:[String],
    marks:[Number]
})

const address =new schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:schema.Types.ObjectId
})