const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/my_database', (err) => {
  console.log(err ? err : 'database is connected');
});

app.listen(3000, () => {
  console.log('server is running on 3000');
});
