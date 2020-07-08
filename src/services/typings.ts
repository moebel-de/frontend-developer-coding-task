type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string,
}
type FeelsLike = {
  day: number,
  night: number,
  eve: number,
  morn: number
}
type BaseConditions = {
  dt: number,
  sunrise: number,
  sunset: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
}
export type Coords = {
  lat: number,
  lon: number,
  errorCode?: number
}
export type Current = BaseConditions & {
  feels_like: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  temp: number,
  weather: Weather[]
}
type Temperature = {
  day: number,
  min: number,
  max: number,
  night: number,
  eve: number,
  morn: number
}
export type Daily = BaseConditions & {
  temp: Temperature,
  weather: Weather[],
  rain: number,
  feels_like: FeelsLike,
  wind_speed: number,
  wind_deg: number,
}
export type OpenWeatherResponse = {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current: Current,
  daily: Daily[],
}