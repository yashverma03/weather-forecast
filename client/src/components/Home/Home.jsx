import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import styles from './Home.module.css';
import API_URL from '../../config/api';
import axios from 'axios';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const sampleData = {
  currentWeather: { main: { temp: 30, humidity: 50 }, weather: [{ description: 'Clear sky' }] },
  forecastData: {
    list: [
      { dt_txt: '2023-09-12 12:00:00', main: { temp: 28 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-13 12:00:00', main: { temp: 29 }, weather: [{ description: 'Partly cloudy' }] },
      { dt_txt: '2023-09-14 12:00:00', main: { temp: 27 }, weather: [{ description: 'Scattered clouds' }] },
      { dt_txt: '2023-09-15 12:00:00', main: { temp: 26 }, weather: [{ description: 'Rainy' }] },
      { dt_txt: '2023-09-16 12:00:00', main: { temp: 25 }, weather: [{ description: 'Cloudy' }] },
      { dt_txt: '2023-09-17 12:00:00', main: { temp: 29 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-18 12:00:00', main: { temp: 30 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-19 12:00:00', main: { temp: 28 }, weather: [{ description: 'Partly cloudy' }] },
      { dt_txt: '2023-09-20 12:00:00', main: { temp: 27 }, weather: [{ description: 'Scattered clouds' }] },
      { dt_txt: '2023-09-21 12:00:00', main: { temp: 26 }, weather: [{ description: 'Rainy' }] },
      { dt_txt: '2023-09-22 12:00:00', main: { temp: 25 }, weather: [{ description: 'Cloudy' }] },
      { dt_txt: '2023-09-23 12:00:00', main: { temp: 29 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-24 12:00:00', main: { temp: 30 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-25 12:00:00', main: { temp: 28 }, weather: [{ description: 'Partly cloudy' }] },
      { dt_txt: '2023-09-26 12:00:00', main: { temp: 27 }, weather: [{ description: 'Scattered clouds' }] },
      { dt_txt: '2023-09-27 12:00:00', main: { temp: 26 }, weather: [{ description: 'Rainy' }] },
      { dt_txt: '2023-09-28 12:00:00', main: { temp: 25 }, weather: [{ description: 'Cloudy' }] },
      { dt_txt: '2023-09-29 12:00:00', main: { temp: 30 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-30 12:00:00', main: { temp: 31 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-12 12:00:00', main: { temp: 28 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-13 12:00:00', main: { temp: 29 }, weather: [{ description: 'Partly cloudy' }] },
      { dt_txt: '2023-09-14 12:00:00', main: { temp: 27 }, weather: [{ description: 'Scattered clouds' }] },
      { dt_txt: '2023-09-15 12:00:00', main: { temp: 26 }, weather: [{ description: 'Rainy' }] },
      { dt_txt: '2023-09-16 12:00:00', main: { temp: 25 }, weather: [{ description: 'Cloudy' }] },
      { dt_txt: '2023-09-17 12:00:00', main: { temp: 29 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-18 12:00:00', main: { temp: 30 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-19 12:00:00', main: { temp: 28 }, weather: [{ description: 'Partly cloudy' }] },
      { dt_txt: '2023-09-20 12:00:00', main: { temp: 27 }, weather: [{ description: 'Scattered clouds' }] },
      { dt_txt: '2023-09-21 12:00:00', main: { temp: 26 }, weather: [{ description: 'Rainy' }] },
      { dt_txt: '2023-09-22 12:00:00', main: { temp: 25 }, weather: [{ description: 'Cloudy' }] },
      { dt_txt: '2023-09-23 12:00:00', main: { temp: 29 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-24 12:00:00', main: { temp: 30 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-25 12:00:00', main: { temp: 28 }, weather: [{ description: 'Partly cloudy' }] },
      { dt_txt: '2023-09-26 12:00:00', main: { temp: 27 }, weather: [{ description: 'Scattered clouds' }] },
      { dt_txt: '2023-09-27 12:00:00', main: { temp: 26 }, weather: [{ description: 'Rainy' }] },
      { dt_txt: '2023-09-28 12:00:00', main: { temp: 25 }, weather: [{ description: 'Cloudy' }] },
      { dt_txt: '2023-09-29 12:00:00', main: { temp: 30 }, weather: [{ description: 'Clear sky' }] },
      { dt_txt: '2023-09-30 12:00:00', main: { temp: 31 }, weather: [{ description: 'Clear sky' }] },
    ],
  },
};

const Home = () => {
  const [cityName, setCityName] = useState('');
  // const [weatherData, setWeatherData] = useState(null);
  const [weatherData, setWeatherData] = useState(sampleData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (cityName.trim() !== '') {
      try {
        const repsonse = await axios.get(`${API_URL}?cityName=${cityName}`);
        const data = repsonse.data;

        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  return (
    <div>
      <h2 className={styles.heading}>
        WEATHER DATA
      </h2>

      <div className={styles.formContainer}>
        <Form className={styles.form} onSubmit={handleOnSubmit}>
          <FormControl
            className={styles.input}
            placeholder='Enter City name ...'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />

          <Button className={styles.button} variant='primary' type='submit'>
            Get Weather
          </Button>
        </Form>
      </div>

      {weatherData && (
        <div className={styles.weatherData}>
          <WeatherCondition data={weatherData.currentWeather} />
          <WeatherForecast data={weatherData.forecastData} />
        </div>
      )}
    </div>
  );
};

export default Home;
