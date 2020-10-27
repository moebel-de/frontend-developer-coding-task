import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import Fonts from './Fonts/fonts';
import { CityInput } from './Components';

const AppDiv = styled.div`
  text-align: left;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
`;

const BlackSpan = styled.span`
  font-family: roboto-black;
`;

function App() {
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
          <CityInput />
        </main>
      </AppDiv>
    </div >
  );
}

export default App;
