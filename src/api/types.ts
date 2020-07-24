interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Day {
  dt: number;
  sunrise: number;
  sunset: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
}

export interface CurrentDay extends Day {
  temp: number;
  visibility: number;
  feels_like: number;
}

export interface Daily extends Day {
  feels_like: FeelsLike;
  pop: number;
  rain?: number;
  temp: Temp;
}

export interface WeeklyForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentDay;
  daily: Daily[];
}
