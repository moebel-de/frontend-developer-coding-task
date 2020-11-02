import React, { KeyboardEvent } from 'react';
import styled from 'styled-components';
import 'weather-icons/css/weather-icons.min.css';

const CityInputField = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  font-size: 1.5em;
  text-align: center;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow .5s;
  box-sizing: border-box;
  
  /* This causes city name to be behind arrow if name is too long. Though there is no city name that long. Anyway, bug to fix */
  padding: 15px 0; 

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

export function CityInputComponent(props: {
    city: string; onChange: (e:string) => void; 
    fetchWeather: () => void; 
    setIsInputFocused: (isFocused: boolean) => void;}
  ) {
  let cityInputRef: HTMLInputElement | null;

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.fetchWeather();
      !!cityInputRef && cityInputRef.blur();
    }
  }

  return (
    <div>
      <CityInputLabel data-testid="city-input-label" htmlFor="city">Type in your location and we will tell you what weather to expect.</CityInputLabel>
      <div style={{ position: 'relative' }}>
        <CityInputField type="text" data-testid="city-input-field"
          name="city" 
          placeholder="Type your city" 
          value={props.city} 
          onChange={(e) => props.onChange(e.target.value) }
          onKeyPress={(e) => onKeyPress(e) }
          onFocus={() => props.setIsInputFocused(true)}
          onBlur={() => props.setIsInputFocused(false)}
          ref={(CityInputRef) => { cityInputRef = CityInputRef; }}/>
        <CityInputArrow data-testid="city-input-arrow" onClick={ () => props.fetchWeather() } className="wi wi-right" />
      </div>
    </div>
  );
}
