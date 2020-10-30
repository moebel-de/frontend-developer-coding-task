import React from 'react';
import styled from 'styled-components';

import { WeatherDailyInfo, IconsMap } from '../Models';

// We are not concerned about translations now, though good practice would be to write
// or use some library to handle the day names
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DailyWeathersContainer = styled.div`
  max-width: 335px;
  margin: 0 auto;
  font-size: 1.2em;

  > div {
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const UpcomingDaysRow = styled.div`
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 4px -4px black;

    i {
      transform: translateX(10px);
    }
  }


  i { 
    font-size: 3em;
    transition: transform .2s;
  }
`;

const WeatherIcon = styled.i`
  font-size: 1.2em;
  margin-left: 10px;
`

export function WeatherWeeklyInfoComponent(props: { 
  weatherDailyInfo: Array<WeatherDailyInfo>,
  isInputFocused: boolean,
}) {
  const upcomingDays = props.weatherDailyInfo.slice(0, 5);
  const getDayName = (dateTime: number) => {
    const date = new Date(dateTime * 1000);
    return days[date.getDay()];
  }

  return (
    <DailyWeathersContainer style={{ filter: `blur(${props.isInputFocused ? '10px' : ''})` }}>
      {
        upcomingDays.map((weatherInfo) => 
          <div key={weatherInfo.dt}>
            <span>{getDayName(weatherInfo.dt)}</span>
            <div>
              <span>{Math.floor(weatherInfo.temp.day)}&#176;</span>
              <span>
                <WeatherIcon className={'wi ' + IconsMap[weatherInfo.weather[0].main]} />  
              </span>
            </div>
          </div>
        )
      }
      <UpcomingDaysRow>
        <span>Upcoming Days</span>
        <div>
          <i className="wi wi-right" />
        </div>
      </UpcomingDaysRow>
    </DailyWeathersContainer>
  );
}