import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'

//°

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  >div{
    display:flex;
    flex-direction:row;
    justify-items:center;
    align-items:center;
  }
`

const IconContainer = styled.div`
  padding: 0 6px;
`

const Degree = styled.span`
  font-size:65px;
  font-weight:800;
`
interface WeatherTodayProps {
  temperature?: string,
  weatherType?: string
}

export const WeatherToday: FunctionComponent<WeatherTodayProps> = ({ temperature, weatherType = '' }) => (
  <Container>
    <div>
      <IconContainer>
        {temperature !== undefined ? <Icon size={50}>{weatherType}</Icon> : null}
      </IconContainer>
      <Degree>{temperature !== undefined ? temperature : '--'}°C</Degree>
    </div>
  </Container>
)