const apiKey: string = '5d50cb77a4d850371ce5a430e31c9b24';

export const fetchWeather = (city: string) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&units=metric&appid=${apiKey}`
  );
};
