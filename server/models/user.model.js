'use strict';

const mongoose = require('mongoose');

mongoose.promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String,
    minlength: 10,
    maxlength: 40
  },
  password: {
    type: String,
    minlength: 8
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;