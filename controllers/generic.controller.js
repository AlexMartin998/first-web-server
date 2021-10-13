'use strict';

const path = require('path');

const genericController = (req, res) =>
  res.render('elements', {
    name: 'Alex',
    os: 'Arch Linux BTW',
  });

module.exports = genericController;
