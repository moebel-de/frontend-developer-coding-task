import React, { useState } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import Fonts from './Fonts/fonts';
import { CityInput } from './Components';

const AppDiv = styled.div`
  text-align: left;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
  background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%);
`;

const BlackSpan = styled.span`
  font-family: roboto-black;
`;

function App() {
  const [ city, setCity ] = useState('Some City');

  const handleCityChange = (e: string) => {
    setCity(e);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Fonts />

      <AppDiv>
        <header>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <BlackSpan>whatweather?</BlackSpan>
        </header>
        <main>
          <CityInput city={ city } onChange={ handleCityChange } />
        </main>
      </AppDiv>
    </div >
  );
}

export default App;
