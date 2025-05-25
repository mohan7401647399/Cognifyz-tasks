const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require('../controllers/AuthController');

//  Google Auth
router.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile'] })
);

//  Google Auth Callback
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  AuthController.googleCallback
);

//  Logout
router.get('/logout', AuthController.logout);

module.exports = router;