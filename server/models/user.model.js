'use strict';

const mongoose = require('mongoose');

mongoose.promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: {
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
  },
  phone:{
    type: Number,
    minlength:10
  },
  dob:{
    type: Date
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;