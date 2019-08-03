'use strict';

const uuid = require('uuid/v4');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);

// session middleware with mongoStore
module.exports = (app) => app.use(session({
  genid: (req) => {
    console.log('Generating session...');
    return uuid();
  },
  name: 'user_session',
  secret: '1234',
  store: new mongoStore({
    url: process.env.DB
  }),
  cookie: {
    secure: true,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
}));