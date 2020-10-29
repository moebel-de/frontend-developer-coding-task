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

export function WeatherInfoComponent(props: { weatherInfo: WeatherInfo }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <TemperatureSpan>
        <TemperatureIcon 
          className={'wi ' + IconsMap[props.weatherInfo.weather[0].main] } />{ Math.floor(props.weatherInfo.main.temp) }&#176;
      </TemperatureSpan>
    </div>
  );
}
