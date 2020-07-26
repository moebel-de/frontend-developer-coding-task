import React, { useState } from "react";
import { BackgroundContainer } from "./components/Background";
import { GlobalStyle } from "./style/GlobalStyle";
import { ReactComponent as WWLogo } from "./logo.svg";
import { RootContainer } from "./App.style";
import { WeatherSearch } from "./view/WeatherSearch";

function App() {
  const [temp, setTemp] = useState(10);
  const onTempChange = (t: number) => {
    setTemp(t);
  };
  return (
    <>
      <GlobalStyle />
      <BackgroundContainer temperatur={temp}>
        <RootContainer>
          <header>
            <WWLogo />
            <h1>whatweather?</h1>
          </header>
          <section>
            <WeatherSearch onTempChange={onTempChange} />
          </section>
        </RootContainer>
      </BackgroundContainer>
    </>
  );
}

export default App;
