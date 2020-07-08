import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'
import { DayMap } from './dayMap'

const List = styled.ul`
  width:100%;
  list-style:none;
  padding:0;
  margin:20px 0 0 0;
`

const ListItem = styled.li`
  width: 100%;
  height: 60px;
  display:flex;
  flex-direction:row;
`

const Date = styled.span`
  font-size:1.5em;
  font-weight: 300;
  flex-grow:1;
`

const Temperature = styled.span`
  font-size:2em;
  font-weight: 800;
`

const IconContainer = styled.div`
  padding: 0 10px;
`

type Day = {
  date: number,
  weatherType: string,
  temperature: number
}
interface WeatherListProps {
  days: Day[]
}

export const WeatherList: FunctionComponent<WeatherListProps> = ({ days }) => (
  <List>
    {days.map(day => (
      <ListItem key={`${day.date}_${day.weatherType}_${day.temperature}`}>
        <Date>{DayMap[day.date]}</Date>
        <IconContainer>
          <Icon size={35}>{day.weatherType}</Icon>
        </IconContainer>
        <Temperature>{day.temperature}°</Temperature>
      </ListItem>
    ))}
  </List>
)