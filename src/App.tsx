import React, { useState } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import { BackgroundComponent, CityInputComponent, WeatherInfoComponent } from './Components';
import { WeatherApiService } from './Services';
import { WeatherInfo } from './Models';

const BlackSpan = styled.span`
  font-family: roboto-black;
`;

const weatherApi = new WeatherApiService();

function App() {
  const [ city, setCity ] = useState('Berlin');
  const [ weatherInfo, setWeatherInfo ] = useState(undefined as WeatherInfo | undefined);

  const handleCityChange = (e: string) => {
    setCity(e);
  }

  const fetchWeather = () => {
    if (!!city) {
      weatherApi.getCurrentWeather(city).then((weatherResponse) => {
        if (weatherResponse.success && !!weatherResponse.success) {
          setWeatherInfo(weatherResponse.weatherInfo);
        }
      });
    }
  }

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
        </main>
      </BackgroundComponent>
    </div >
  );
}

export default App;
