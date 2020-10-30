import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import { BackgroundComponent, CityInputComponent, WeatherInfoComponent, WeatherWeeklyInfoComponent } from './Components';
import { WeatherApiService } from './Services';
import { WeatherDailyInfo, WeatherInfo } from './Models';

const BlackSpan = styled.span`
  font-family: roboto-black;
`;

const weatherApi = new WeatherApiService();

function App() {
  const [ city, setCity ] = useState('Berlin');
  const [ weatherInfo, setWeatherInfo ] = useState(undefined as WeatherInfo | undefined);
  const [ weatherDailyInfo, setWeatherDailyInfo ] = useState([] as Array<WeatherDailyInfo>);
  const [ mounted, setMounted ] = useState(false);

  const handleCityChange = (e: string) => {
    setCity(e);
  }

  const fetchWeather = () => {
    if (!!city && (!!weatherInfo ? weatherInfo.name != city : true)) {
      weatherApi.getCurrentWeather(city).then((weatherResponse) => {
        if (weatherResponse.success && weatherResponse.weatherInfo) {
          setWeatherInfo(weatherResponse.weatherInfo);

          /**
           * Unfortunately we cannot get the lat and long of the city directly from the 
           * input field, thought the api that I have picked doesn't have free endpoint to 
           * provide the daily forecast, instead of mocking the data I decided to send the request
           * after current weather is detected. The response of the current request contains lat long in
           * case if the city is found, then the data can be used to receive daily forecast with lat and long
           */
          weatherApi.getWeeklyWeather(
            weatherResponse.weatherInfo.coord.lat, 
            weatherResponse.weatherInfo.coord.lon)
          .then((weathersResponse) => {
            if (!!weathersResponse.success && !!weathersResponse.weathersInfo) {
              setWeatherDailyInfo(weathersResponse.weathersInfo.daily);
            }

            // Handle weekly error case
          });
        }

        // Handle error case
      });
    }
  }

  useEffect(() => {
    if (!mounted) {
      fetchWeather();
      setMounted(true);
    }
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <BackgroundComponent temperature={weatherInfo?.main.temp}>
        <header>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <BlackSpan>whatweather?</BlackSpan>
        </header>
        <main>
          <CityInputComponent city={ city } onChange={ handleCityChange } fetchWeather={ fetchWeather } />
          { !!weatherInfo && <WeatherInfoComponent weatherInfo={ weatherInfo } /> }
          { !!weatherDailyInfo.length && <WeatherWeeklyInfoComponent weatherDailyInfo={ weatherDailyInfo } /> }
        </main>
      </BackgroundComponent>
    </div>
  );
}

export default App;
