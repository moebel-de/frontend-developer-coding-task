import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import Fonts from './Fonts/fonts';
import { CityInput } from './Components';

const BlackSpan = styled.span`
  font-family: roboto-black;
`;

function App() {
  return (
    <div>
      <Fonts />
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <BlackSpan>whatweather?</BlackSpan>
      </header>
      <main>
        <CityInput />
      </main>
    </div>
  );
}

export default App;
