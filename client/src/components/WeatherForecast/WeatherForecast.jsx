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

const WeatherForecast = ({ data }) => {
  if (!data) {
    return null;
  }

  const { list } = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>5-Day Weather Forecast</h2>

      <div className={styles.headingRow}>
        <p className={styles.headingText}>Date</p>
        <p className={styles.headingText}>Temperature</p>
        <p className={styles.headingText}>Icon</p>
      </div>

      <ul className={styles.listContainer}>
        {list.filter((forecast, index) => index % 8 === 0).map((forecast, index) => (
          <li className={styles.list} key={index}>
            <p className={styles.text}>{forecast.dt_txt.split(' ')[0]}</p>
            <p className={styles.text}>{forecast.main.temp}° C</p>
            <p className={styles.image}>{getWeatherIcon(forecast.weather[0].description)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
