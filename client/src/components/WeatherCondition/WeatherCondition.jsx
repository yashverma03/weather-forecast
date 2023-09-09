import React from 'react';
import styles from './WeatherCondition.module.css';

const WeatherCondition = ({ data }) => {
  if (!data) {
    return null;
  }

  const { main, weather } = data;
  const { temp, humidity } = main;
  const weatherDescription = weather[0].description;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Current Weather</h2>

      <div className={styles.textContainer}>
        <p className={styles.text}>Temperature: {temp}°C</p>
        <p className={styles.text}>Humidity: {humidity}%</p>
        <p className={styles.text}>Description: {weatherDescription}</p>
      </div>
    </div>
  );
};

export default WeatherCondition;
