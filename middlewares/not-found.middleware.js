'use strict';

const path = require('path');

module.exports = (req, res) => {
  return res.status(404).render('404');
};
