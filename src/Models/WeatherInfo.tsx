/**
 * The response from the API contains additional data besides main and weather
 * those one should be listed if are used in the system
 */

 export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
 };

 export interface WeatherInfo {
  coord: {
    lat: number;
    lon: number;
  },
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<Weather>;
}

export interface WeatherDailyInfo {
  dt: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    night: number;
  };
  weather: Array<Weather>;
}
