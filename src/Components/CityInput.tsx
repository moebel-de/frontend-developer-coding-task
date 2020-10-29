import React from 'react';
import styled from 'styled-components';

const CityInputField = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  font-size: 1.5em;
  text-align: center;
  padding: 15px 0;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow .5s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 13px 5px rgb(247, 191, 176); // TODO Make dynamic based on actual bg color
  }
`;

const CityInputLabel = styled.label`
  display: block;
  margin: 30px 10px 20px;
`;

export function CityInput() {
  return (
    <div>
      <CityInputLabel htmlFor="city">Type in your location and we will tell you what weather to expect.</CityInputLabel>
      <CityInputField type="text" name="city" placeholder="Type your city" />
    </div>
  );
}
