const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/tests', (err) => {
  console.log(err ? err : 'database is connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('welcome');
});

app.use((req, res, next) => {
  res.send('page not found');
});
app.listen(3000, () => {
  console.log('server is running on 3000');
});
