const { getWeather } = require('../models/weather');

//  get weather
exports.getWeather = async (req, res) => {
  try {
    const weather = await getWeather(req.params.city);
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};