import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import styles from './Home.module.css';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <div>
      <div className={styles.formContainer}>
        <Form className={styles.form} onSubmit={handleOnSubmit}>
          <FormControl className={styles.input} placeholder='Enter City name ...' />

          <Button className={styles.button} variant='primary' type='submit'>
            Get Weather
          </Button>
        </Form>
      </div>

      {weatherData && (
        <>
          <WeatherCondition />
          <WeatherForecast />
        </>
      )}
    </div>
  );
};

export default Home;
