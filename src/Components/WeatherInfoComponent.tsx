import React from 'react';
import styled from 'styled-components';

import { WeatherInfo } from '../Models';

// import { WeatherInfo } from '../Models';

const TemperatureSpan = styled.span`
  font-family: 'roboto-black';
  display: block;
  margin-top: 20px;
  font-weight: 900;
  font-size: 6em;
`;

export function WeatherInfoComponent(props: { weatherInfo: WeatherInfo }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <TemperatureSpan>{ Math.floor(props.weatherInfo.main.temp) }&#176;</TemperatureSpan>
    </div>
  );
}