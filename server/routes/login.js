'use strict';

const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
  console.log(`Inside GET login endpoint -> ${req.sessionID}`);
  return res.send('Login page');
});

router.post('/', (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (info) {
        return res.send(info.message);
      }
      if (err) {
        next(err);
      }
      // new-user
      if (!user) {
        return res.redirect('/');
      }
      // authenticated user
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        console.log(user);
        return res.send(`Logged in as ${user.username}`);
      });
    })(req, res, next);
});

module.exports = router;