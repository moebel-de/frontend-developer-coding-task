export interface WeatherData {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  speed: number;
  deg: number;
  clouds: number;
  pop: number;
  rain?: number;
}

export type WeatherDataForCity = {
  city: {
    name: string;
    id: number;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
  list: WeatherData[];
  cod: string;
  message: number;
  cnt: number;
};
