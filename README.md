**Deployed link**- https://weather-forecast-1xdw.onrender.com/

<br>

## Description

- Build a weather forecast web application showing current weather and 5-day weather forecast using OpenWeatherMap API.
- User can search weather of any city by typing city name in the search bar.
- Temperature can be viewed in both Celsius and Fahrenheit units.
- Average temperature for the 5-day forecast is shown.
- Icons based on weather is shown.
- In frontend, React.js and Bootstrap is used.
- In backend, Node.js and Express.js
- Caching is also implemented using node-cache.

<br>

## Installation

- To use the project on your local machine, download the project or use git clone.
- Open a terminal in the project directory and run the following commands in it.
  - `cd ./client/`
  - `npm install`
  - `npm start`
- A react app will open, having URL `http://localhost:3000/`.
- Open another terminal in the project directory and run the following commands in it.
  - `cd ./server/`
  - `npm install`
  - `npm start`
- The terminal should display `Server is running on PORT 4000`.
- Create a `.env` file and add the API key for OpenWeatherMap. You can get API key by creating an account on OpenWeatherMap. Refer to `.env.example` file.
- Go to `./client/src/config/api.js`. Comment the deployed API_URL. Uncomment the local API_URL. Your API_URL should be `http://localhost:4000/`.
- Now the setup and installation of both client and server is complete.

<br>

## Screenshots

<br>

Home page

![](https://github.com/yashverma03/weather-forecast/assets/94443269/364ef468-3e61-4ebe-8ba6-3197cfbb33d6)

<br>

Current Weather for Delhi (Celsius)

![](https://github.com/yashverma03/weather-forecast/assets/94443269/eba4d72a-372b-40f3-b649-0951ef125551)

<br>

5-day Weather Forecast for Delhi (Celsius)

![](https://github.com/yashverma03/weather-forecast/assets/94443269/f7f06186-462d-464c-823b-9c30953c4e45)

<br>

Current Weather for Delhi (Fahrenheit)

![](https://github.com/yashverma03/weather-forecast/assets/94443269/d400ed59-f264-42af-8050-5cad4c2b6391)

<br>

5-day Weather Forecast for Delhi (Fahrenheit)

![](https://github.com/yashverma03/weather-forecast/assets/94443269/2fd2f3f0-9970-498c-82a5-5753b71228e3)

<br>

Caching (time taken for same request has been reduced drastically)

![](https://github.com/yashverma03/weather-forecast/assets/94443269/70cbe0c2-a694-4253-8e60-4acc9ddf72f2)
