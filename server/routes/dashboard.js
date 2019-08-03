'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(`User authenticated? ${req.isAuthenticated()}`);
  if (req.isAuthenticated()) {
    return res.send(`You are logged in as ${req.user.name}`);
  } else {
    return res.redirect('/');
  }
});

module.exports = router;
