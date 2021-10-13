'use strict';

const router = require('express').Router();
const { elementsController } = require('../controllers');

router.get('/elements', elementsController);

module.exports = router;
