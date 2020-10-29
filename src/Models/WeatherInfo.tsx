/**
 * The response from the API contains additional data besides main and weather
 * those one should be listed if are used in the system
 */
export interface WeatherInfo {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}