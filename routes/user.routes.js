'use strict';

const { userController } = require('../controllers');

const router = require('express').Router();

router.get('/user', userController);

module.exports = router;
