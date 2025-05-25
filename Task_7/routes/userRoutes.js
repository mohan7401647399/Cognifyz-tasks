const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers/UserController');

//  get user
router.get('/user', UserController.getUser);

module.exports = router;