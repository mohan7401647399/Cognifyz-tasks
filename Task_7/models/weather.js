const axios = require('axios');

async function getWeather(city) {
  const apiKey = '5c4641ce3b948b87d23607a339e4ea2a';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch weather');
  }
}

module.exports = { getWeather };