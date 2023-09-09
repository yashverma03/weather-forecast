import axios from 'axios';

export const getWeatherData = async (req, res) => {
  const { cityName } = req.query;

  const API_KEY = process.env.API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  try {
    // Fetch lat and lon for the city
    const locationResponse = await axios.get(
      `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}`
    );

    const { lat, lon } = locationResponse.data.coord;

    // Fetch current weather data
    const currentWeatherResponse = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    // Fetch 5-day weather forecast
    const forecastResponse = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const weatherData = {
      currentWeather: currentWeatherResponse.data,
      forecastData: forecastResponse.data,
    };

    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};
