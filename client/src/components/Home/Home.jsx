import React, { useState } from 'react';
import { FormControl, Button, Form, Dropdown } from 'react-bootstrap';
import styles from './Home.module.css';
import API_URL from '../../config/api';
import axios from 'axios';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const Home = () => {
  // State variables
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  // Function to handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (cityName.trim() !== '') {
      try {
        // Fetch weather data from the API
        const repsonse = await axios.get(`${API_URL}?cityName=${cityName}`);
        const data = repsonse.data;

        // Set the retrieved weather data in state
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  // Function to handle temperature unit change
  const handleUnitChange = (newUnit) => {
    setTemperatureUnit(newUnit);
  };

  return (
    <div>
      <h2 className={styles.heading}>WEATHER DATA</h2>

      <div className={styles.formContainer}>
        <Form className={styles.form} onSubmit={handleOnSubmit}>
          {/* Input field for city name */}
          <FormControl
            className={styles.input}
            placeholder='Enter City name ...'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />

          {/* Dropdown for temperature unit selection */}
          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
              {temperatureUnit === 'celsius' ? 'Celsius' : 'Fahrenheit'}
            </Dropdown.Toggle>

            {/* Dropdown menu for unit selection */}
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleUnitChange('celsius')}>Celsius</Dropdown.Item>
              <Dropdown.Item onClick={() => handleUnitChange('fahrenheit')}>Fahrenheit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Submit button */}
          <Button className={styles.button} variant='primary' type='submit'>
            Get Weather
          </Button>
        </Form>
      </div>

      {/* Display weather data if available */}
      {weatherData && (
        <div className={styles.weatherData}>
          {/* Component to display current weather condition */}
          <WeatherCondition data={weatherData.currentWeather} temperatureUnit={temperatureUnit} />

          {/* Component to display 5-day weather forecast */}
          <WeatherForecast data={weatherData.forecastData} temperatureUnit={temperatureUnit} />
        </div>
      )}
    </div>
  );
};

export default Home;
