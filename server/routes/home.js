'use strict';

const router = require('express').Router();

// Homepage 
router.get('/', (req, res) => {
  return res.send('Welcome to homepage');
  console.log(`Connected a session -> ${req.sessionID}`);
});

module.exports = router;