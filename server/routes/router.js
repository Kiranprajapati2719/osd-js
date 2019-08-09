'use strict';

const express = require('express');

const login = require('./login'),
  logout = require('./logout'),
  home = require('./home'),
  register = require('./register'), 
  dashboard = require('./dashboard');

module.exports = (app) => {
  app.use(express.json());
  app.use('/', home);
  app.use('/login', login);
  app.use('/logout', logout);
  app.use('/dashboard', dashboard);
  app.use('/register', register); 
}