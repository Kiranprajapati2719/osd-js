'use strict';

const mongoose = require('mongoose');
require('dotenv').config;

mongoose.promise = global.Promise;

module.exports = async () => {
  await mongoose.connect(
    process.env.DB,
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }
  )
    .then(() => console.log('Database connected ...'))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};
