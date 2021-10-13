'use strict';

const elementsController = (req, res) =>
  res.render('elements', {
    name: 'Alex',
    os: 'Arch Linux BTW',
  });

module.exports = elementsController;
