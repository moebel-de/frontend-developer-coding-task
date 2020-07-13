export const fetchWeather = (city: string) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_API_TOKEN}`
  );
};
