const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'dtabase is connected');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome');
});

app.post('/users', (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

app.get('/users', (req, res, next) => {
  User.find({}, (err, user) => {
    if (err) return next(err);
    res.json({ user: user });
  });
});

app.get('/usersone', (req, res) => {
  User.findOne({ _id: '61388fce8ea8e496e030df79' }, (err, user) => {
    res.json(user);
  });
});

app.get('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

app.put('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

app.delete('/users/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) return next(err);
    res.send(`${user.name} is deleted`);
  });
});

app.use((err, res, req, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is connected');
});
