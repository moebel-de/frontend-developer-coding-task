import React from 'react';
import styled from 'styled-components';

const CityInputField = styled.input`
  width: 100%;
  border-radius: 20px;
`;

export function CityInput() {
  return (
    <div>
      <p>Type in your location and we will tell you what weather to expect.</p>
      <CityInputField type="text" name="city" placeholder="Type your city" />
    </div>
  );
}
