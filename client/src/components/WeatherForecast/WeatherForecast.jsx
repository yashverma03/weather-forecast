import React from 'react';
import styles from './WeatherForecast.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faCloudRain, faSnowflake, faWind, } from '@fortawesome/free-solid-svg-icons';

const getWeatherIcon = (description) => {
  switch (description.toLowerCase()) {
    case 'clear sky':
      return <FontAwesomeIcon icon={faSun} />;

    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return <FontAwesomeIcon icon={faCloudSun} />;

    case 'cloudy':
      return <FontAwesomeIcon icon={faCloud} />;

    case 'light rain':
    case 'moderate rain':
    case 'heavy intensity rain':
      return <FontAwesomeIcon icon={faCloudRain} />;

    case 'snow':
      return <FontAwesomeIcon icon={faSnowflake} />;

    default:
      return <FontAwesomeIcon icon={faWind} />;
  }
};

const convertTemperature = (temp, unit) => {
  if (unit === 'fahrenheit') {
    return ((temp * 9) / 5 + 32).toFixed(2);
  }
  return temp.toFixed(2);
};

const WeatherForecast = ({ data, temperatureUnit }) => {
  if (!data) {
    return null;
  }

  const { list } = data;

  const selectedForecasts = list.filter((forecast, index) => index % 8 === 0);

  const totalTemp = selectedForecasts.reduce((sum, forecast) => sum + forecast.main.temp, 0);
  const averageTemp = totalTemp / selectedForecasts.length;
  const convertedAverageTemp = convertTemperature(averageTemp, temperatureUnit);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>5-Day Weather Forecast</h2>

      <div className={styles.headingRow}>
        <p className={styles.headingText}>Date</p>
        <p className={styles.headingText}>Temperature</p>
        <p className={styles.headingText}>Icon</p>
      </div>

      <ul className={styles.listContainer}>
        {selectedForecasts.map((forecast, index) => {
          const weatherIcon = getWeatherIcon(forecast.weather[0].description);
          const temp = convertTemperature(forecast.main.temp, temperatureUnit);

          return (
            <li className={styles.list} key={index}>
              <p className={styles.text}>{forecast.dt_txt.split(' ')[0]}</p>
              <p className={styles.text}>{temp}° {temperatureUnit.toUpperCase()[0]}</p>
              <p className={styles.image}>{weatherIcon}</p>
            </li>
          );
        })}
      </ul>

      <p className={styles.averageTemp}>
        Average Temperature: {convertedAverageTemp}° {temperatureUnit.toUpperCase()[0]}
      </p>
    </div>
  );
};

export default WeatherForecast;
