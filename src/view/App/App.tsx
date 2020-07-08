import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { GlobalStyles } from '../../theme';
import TempBackground from '../../components/TempBackground';
import WeatherSummary from '../WeatherSummary';
import { Header, LogoText, AppDescription } from './styles';

const App = () => {
  const [backgroundTemp, setBackgroundTemp] = useState(15);

  return (
    <>
      <GlobalStyles />
      <TempBackground temp={backgroundTemp}>
        <Header>
          <img src={logo} className='App-logo' alt='logo' />
          <LogoText>whatweather?</LogoText>
        </Header>
        <AppDescription>
          Type in your location and we tell you what weather to expect.
        </AppDescription>
        <WeatherSummary changeTemp={setBackgroundTemp} />
      </TempBackground>
    </>
  );
};

export default App;
