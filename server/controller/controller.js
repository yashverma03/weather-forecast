import axios from 'axios';
import cache from '../middleware/cacheMiddleware.js';

// Controller function to fetch weather data for a specified city name
export const getWeatherData = async (req, res) => {
  // Extract the 'cityName' from the query parameters
  const { cityName } = req.query;

  // Get the API key from environment variables
  const apiKey = process.env.API_KEY;

  // Base URL for OpenWeatherMap API
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  try {
    // Fetch location data (latitude and longitude) for the specified city
    const locationResponse = await axios.get(
      `${BASE_URL}/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );

    // Extract latitude and longitude from the location response
    const { lat, lon } = locationResponse.data.coord;

    // Fetch current weather data for the specified coordinates (latitude and longitude)
    const currentWeatherResponse = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    // Fetch 5-day weather forecast data for the specified coordinates
    const forecastResponse = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const weatherData = {
      currentWeather: currentWeatherResponse.data,
      forecastData: forecastResponse.data,
    };

    // Cache the weather data using a cache key based on the city name
    cache.set(`weatherData:${cityName}`, weatherData);

    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};
