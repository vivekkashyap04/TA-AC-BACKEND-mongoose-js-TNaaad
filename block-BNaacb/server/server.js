const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/test', (err) => {
  console.log(err ? err : 'database is connect');
});

app.listen(4000, () => {
  console.log('server is listen on 4000');
});
