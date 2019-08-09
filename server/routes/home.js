'use strict';

const router = require('express').Router();

// Homepage 
router.get('/', (req, res) => {
  console.log(`Connected a session -> ${req.sessionID}`);
  return res.send('Welcome to homepage');
});

module.exports = router;