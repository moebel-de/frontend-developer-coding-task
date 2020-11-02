import React from 'react';
import styled from 'styled-components';

import { WeatherInfo, IconsMap } from '../Models';

const TemperatureSpan = styled.span`
  font-family: 'roboto-black';
  display: block;
  margin-top: 20px;
  font-weight: 900;
  font-size: 6em;
`;

const TemperatureIcon = styled.i`
  font-size: 0.30em;
  vertical-align: middle;
  margin-right: 10px;
`;

export function WeatherInfoComponent(props: { weatherInfo: WeatherInfo; isInputFocused: boolean; }) {
  return (
    <div data-testid="weather-info-container" style={{ textAlign: 'center', filter: `blur(${props.isInputFocused ? '10px' : '0'})` }}>
      <TemperatureSpan data-testid="weather-temperature">
        <TemperatureIcon data-testid="weather-icon"
          className={'wi ' + IconsMap[props.weatherInfo.weather[0].main] } />{ Math.floor(props.weatherInfo.main.temp) }&#176;
      </TemperatureSpan>
    </div>
  );
}
