const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weatherController');
const { ensureAuth } = require('../middleware/authMiddleware');

//  get weather
router.get('/api/weather/:city', ensureAuth, WeatherController.getWeather);

module.exports = router;