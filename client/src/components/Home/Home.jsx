import React, { useState } from 'react';
import { FormControl, Button, Form, Dropdown } from 'react-bootstrap';
import styles from './Home.module.css';
import API_URL from '../../config/api';
import axios from 'axios';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

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

  const handleUnitChange = (newUnit) => {
    setTemperatureUnit(newUnit);
  };

  return (
    <div>
      <h2 className={styles.heading}>WEATHER DATA</h2>

      <div className={styles.formContainer}>
        <Form className={styles.form} onSubmit={handleOnSubmit}>
          <FormControl
            className={styles.input}
            placeholder='Enter City name ...'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />          

          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
              {temperatureUnit === 'celsius' ? 'Celsius' : 'Fahrenheit'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleUnitChange('celsius')}>Celsius</Dropdown.Item>
              <Dropdown.Item onClick={() => handleUnitChange('fahrenheit')}>Fahrenheit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button className={styles.button} variant='primary' type='submit'>
            Get Weather
          </Button>
        </Form>
      </div>

      {weatherData && (
        <div className={styles.weatherData}>
          <WeatherCondition data={weatherData.currentWeather} temperatureUnit={temperatureUnit} />
          <WeatherForecast data={weatherData.forecastData} temperatureUnit={temperatureUnit} />
        </div>
      )}
    </div>
  );
};

export default Home;
