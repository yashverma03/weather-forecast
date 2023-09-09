import React from 'react';
import styles from './WeatherCondition.module.css';

// Function to convert temperature units (rounded to 2 decimal places)
const convertTemperature = (temp, unit) => {
  if (unit === 'fahrenheit') {
    return ((temp * 9) / 5 + 32).toFixed(2);
  }
  return temp.toFixed(2);
};

// WeatherCondition component takes data and temperatureUnit as props
const WeatherCondition = ({ data, temperatureUnit }) => {
  if (!data) {
    return null;
  }

  // Extract necessary data from the 'data' prop
  const { main, weather } = data;
  const { temp, humidity } = main;
  const weatherDescription = weather[0].description;

  // Convert temperature based on the provided temperatureUnit
  const convertedTemp = convertTemperature(temp, temperatureUnit);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Current Weather</h2>

      <div className={styles.textContainer}>
        {/* Display temperature with units */}
        <p className={styles.text}>Temperature: {convertedTemp}° {temperatureUnit.toUpperCase()[0]}</p>

        {/* Display humidity */}
        <p className={styles.text}>Humidity: {humidity}%</p>

        {/* Display weather description */}
        <p className={styles.text}>Description: {weatherDescription}</p>
      </div>
    </div>
  );
};

export default WeatherCondition;
