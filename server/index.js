'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const helmet = require('helmet');
require('dotenv').config();


const app = express();

// Helmet middleware
app.use(helmet());

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session
require('./config/connect')();
// require('./config/session')(app);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// passport core
require('./config/passport')(passport);

// routes
require('./routes/router')(app);

app.all('*', function (req, res) {
  res.redirect('/');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
}); 