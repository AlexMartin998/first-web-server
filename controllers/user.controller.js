'use strict';

const path = require('path');

const userController = (req, res) =>
  res.json({
    name: 'Alex',
    age: 24,
    os: 'Arch Linux BTW',
  });

module.exports = userController;
