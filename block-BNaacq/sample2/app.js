const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample2',(err) => {
    console.log(err ? err : 'database is connected');
})
const app = express();



app.listen(4000, () => {
    console.log('server is listen on 4000')
})