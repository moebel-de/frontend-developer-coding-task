import React from 'react';
import styled from 'styled-components';

import { WeatherInfo } from '../Models';

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
`;

/**
 * There are main grouping of the weather
 * Besides that there are sub groups of the weather which specifies the weather more accurate.
 * For the test purposes we keep only general grouping, on live applications makes sense to make full mapping
 * to provide better user experience.
 */
const iconsMap: {[name: string] : string} = {
  'Thunderstorm': 'wi-thunderstorm',
  'Drizzle': 'wi-sprinkle',
  'Rain': 'wi-rain',
  'Snow': 'wi-snow',
  'Mist': 'wi-fog',
  'Smoke': 'wi-smoke',
  'Haze': 'wi-day-haze',
  'Dust': 'wi-dust',
  'Fog': 'wi-fog',
  'Sand': 'wi-sandstorm',
  'Ash': 'wi-volcano',
  'Squall': 'wi-volcano',
  'Tornado': 'wi-tornado',
  'Clear': 'wi-day-sunny',
  'Clouds': 'wi-cloud',
};

export function WeatherInfoComponent(props: { weatherInfo: WeatherInfo }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <TemperatureSpan>
        <TemperatureIcon 
          className={'wi ' + iconsMap[props.weatherInfo.weather[0].main] } />{ Math.floor(props.weatherInfo.main.temp) }&#176;
      </TemperatureSpan>
    </div>
  );
}
