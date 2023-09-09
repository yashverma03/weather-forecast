import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import styles from './Home.module.css';
import API_URL from '../../config/api';
import axios from 'axios';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

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
        <>
          <WeatherCondition data={weatherData.currentWeather} />
          <WeatherForecast data={weatherData.forecastData} />
        </>
      )}
    </div>
  );
};

export default Home;
