import axios from 'axios';
import cache from '../middleware/cacheMiddleware.js';

export const getWeatherData = async (req, res) => {
  const { cityName } = req.query;

  const apiKey = process.env.API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  try {
    const locationResponse = await axios.get(
      `${BASE_URL}/weather?q=${cityName}&appid=${apiKey}`
    );

    const { lat, lon } = locationResponse.data.coord;

    const currentWeatherResponse = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    const forecastResponse = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    const weatherData = {
      currentWeather: currentWeatherResponse.data,
      forecastData: forecastResponse.data,
    };

    cache.set(`weatherData:${cityName}`, weatherData);

    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};
