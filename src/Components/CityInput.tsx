import React from 'react';
import styled from 'styled-components';
import 'weather-icons/css/weather-icons.min.css';

const CityInputField = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  font-size: 1.5em;
  text-align: center;
  padding: 15px 8% 15px 0;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow .5s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 13px 5px rgb(247, 191, 176); // TODO Make dynamic based on actual bg color
  }
`;

const CityInputLabel = styled.label`
  display: block;
  margin: 30px 10px 20px;
`;

const CityInputArrow = styled.i`
  position: absolute;
  right: 0;
  height: 100%;
  width: 8%;

  &:hover {
    cursor: pointer;

    &:before {
      left: calc(50% + 5px);
    }
  }

  &:before {
    transition: left .5s;
    font-size: 3em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export function CityInput(props: {city: string; onChange: (e:string) => void; fetchWeather: () => void;}) {
  return (
    <div>
      <CityInputLabel htmlFor="city">Type in your location and we will tell you what weather to expect.</CityInputLabel>
      <div style={{ position: 'relative' }}>
        <CityInputField type="text" 
          name="city" 
          placeholder="Type your city" 
          value={props.city} 
          onChange={(e) => props.onChange(e.target.value)} />
        <CityInputArrow onClick={ () => props.fetchWeather() } className="wi wi-right" />
      </div>
    </div>
  );
}
