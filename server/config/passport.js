'use strict';

const localStrategy = require('passport-local'); 
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = passport => {

  // tell passport to serialize
  passport.serializeUser((user, done) => {
    console.log('Inside serializeUser');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('Now inside deSerializeUser');
    process.nextTick(async () =>
      await User.findById(id, (err, user) => done(err, user))
    );
  });

  passport.use(
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        console.log('Authenticating...');
        // db call for user
        try {
          const checkUser = await User.findOne({ email });
          if (!checkUser) {
            return done(null, false, { message: 'User not found...' });
          }
          if (!bcrypt.compareSync(password, checkUser.password)) {
            return done(null, false, { message: 'Invalid credentials...' });
          }
          return done(null, checkUser);
        } catch (err) {
          done(err);
        }
      }
    )
  );
}