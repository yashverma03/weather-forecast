import React from 'react';
import styles from './WeatherCondition.module.css';

const convertTemperature = (temp, unit) => {
  if (unit === 'fahrenheit') {
    return ((temp * 9) / 5 + 32).toFixed(2);
  }
  return temp.toFixed(2);
};

const WeatherCondition = ({ data, temperatureUnit }) => {
  if (!data) {
    return null;
  }

  const { main, weather } = data;
  const { temp, humidity } = main;
  const weatherDescription = weather[0].description;

  const convertedTemp = convertTemperature(temp, temperatureUnit);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Current Weather</h2>

      <div className={styles.textContainer}>
        <p className={styles.text}>Temperature: {convertedTemp}° {temperatureUnit.toUpperCase()[0]}</p>
        <p className={styles.text}>Humidity: {humidity}%</p>
        <p className={styles.text}>Description: {weatherDescription}</p>
      </div>
    </div>
  );
};

export default WeatherCondition;
