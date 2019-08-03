'use strict';

const router = require('express').Router();
const User = require('../models/user.model'); 
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  console.log(`Welcome to register -> ${req.sessionID}`);
  return res.send('Inside register page');
});

router.post('/', async (req, res) => {

  // if (Object.keys(req.body).length === 0) {
  //   return res.send('Cannot add user... No data provided');
  // }

  const { email, password } = req.body;

  if (error) {
    return res.send(error.details[0].message);
  }
  try {
    const checkUser = await User.findOne({ email });

    if (!!checkUser) {
      return res.send(`${checkUser.email} is already registerd :)`);
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          await new User({ ...req.body, password: hash }).save()
            .then((doc, err) => {
              res.send('You have been registered ')
            }).catch(err => res.send(err));
        });
      });
    }
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;