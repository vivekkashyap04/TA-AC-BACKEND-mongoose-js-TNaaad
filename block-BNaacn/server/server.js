const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/tests', (err) => {
    console.log(err ? err : 'database is connected');
})

app.get('/',(req,res) => {
    res.send('welcome');
})

app.listen(3000, () => {
    console.log('server is running on 3000');
})