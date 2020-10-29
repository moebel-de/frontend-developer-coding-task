import axios from 'axios';
import { WeatherInfo } from '../Models';

export class WeatherApiService {
  private readonly apiKey = 'bcb9e9da67519afea21288f74d064516';
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  getCurrentWeather(city: string): Promise<{ success: boolean; weatherInfo?: WeatherInfo }> {
    return axios.get<WeatherInfo>(this.apiUrl, {params: {q: city, appid: this.apiKey}})
      .then(({ data }) => ({ success: true, weatherInfo: data }))
      .catch(() => ({ success: false }));
  };
}