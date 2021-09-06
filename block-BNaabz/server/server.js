const express = require('express');
const mongo = require('mongoose');

const app = express();
mongo.connect('mongodb://localhost/vivek', (err) => {
  console.log(err ? err : 'connected to database');
});

app.listen(3000, () => {
  console.log('server is running on 3000');
});
