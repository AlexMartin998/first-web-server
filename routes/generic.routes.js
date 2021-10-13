'use strict';

const { genericController } = require('../controllers');

const router = require('express').Router();

router.get('/generic', genericController);

module.exports = router;
