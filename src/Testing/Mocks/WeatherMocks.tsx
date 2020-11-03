import { WeatherDailyInfo, WeatherInfo } from "../../Models";

export const weatherInfoMock = {
  coord: {
    lat: 10,
    lon: 10,
  },
  main: {
    temp: 10,
    feels_like: 10,
    humidity: 10,
    pressure: 10,
    temp_max: 10,
    temp_min: 10,
  },
  name: 'Berlin',
  weather: [{
    id: 1,
    description: 'Rain',
    icon: 'Rain',
    main: 'Rain',
  }]
} as WeatherInfo;

export const weeklyWeatherInfoMock = [{
  dt: 1583452800, // Tuesday, November 2020
  temp: {
    day: 20,
    eve: 20,
    max: 20,
    min: 20,
    night: 20,
  },
  weather: [{
    id: 1,
    description: 'Clear',
    icon: 'Clear',
    main: 'Clear'
  }],
}, {
  dt: 1586563200, // Wednesday, November 2020
  temp: {
    day: 10,
    eve: 10,
    max: 10,
    min: 10,
    night: 10,
  },
  weather: [{
    id: 2,
    description: 'Snow',
    icon: 'Snow',
    main: 'Snow',
  }],
}] as Array<WeatherDailyInfo>;
