import axios from 'axios';
import { WeatherDailyInfo, WeatherInfo } from '../Models';

export class WeatherApiService {
  private readonly apiKey = 'bcb9e9da67519afea21288f74d064516';
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/';

  getCurrentWeather(city: string): Promise<{ success: boolean; weatherInfo?: WeatherInfo }> {
    return axios.get<WeatherInfo>(this.apiUrl + 'weather', {
      params: {q: city, appid: this.apiKey, units: 'metric' }
    })
    .then(({ data }) => ({ success: true, weatherInfo: data }))
    .catch(() => ({ success: false }));
  };

  getWeeklyWeather(lat: number, lon: number): Promise<{ success: boolean; weathersInfo?: { daily: Array<WeatherDailyInfo> } }> {
    return axios.get<any>(this.apiUrl + 'onecall', {
      params: {lat, lon, appid: this.apiKey, units: 'metric', exclude: 'current,hourly,minutely' }
    })
    .then(({ data }) => ({ success: true, weathersInfo: data }))
    .catch(() => ({ success: false }));
  };
}
