import React, { useState } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import { CityInputComponent, WeatherInfoComponent } from './Components';
import { WeatherApiService } from './Services';
import { WeatherInfo } from './Models';

const AppDiv = styled.div`
  text-align: left;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
  background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%);
`;

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
      <AppDiv>
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
      </AppDiv>
    </div >
  );
}

export default App;
