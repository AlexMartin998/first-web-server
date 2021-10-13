'use strict';

const path = require('path');

const homeController = (req, res) =>
  res.render('home', {
    name: 'Alex',
    os: 'Arch Linux',
  });

module.exports = homeController;
