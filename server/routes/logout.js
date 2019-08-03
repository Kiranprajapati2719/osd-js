'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  req.logout();
  console.log(`User authenticated? ${req.isAuthenticated()}`);
  return res.redirect('/');
});

module.exports = router;
