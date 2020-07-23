import React from "react";
import { BackgroundContainer } from "./components/Background";
import { GlobalStyle } from "./style/GlobalStyle";
import { ReactComponent as WWLogo } from "./logo.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundContainer temperatur={10}>
        <header>
          <WWLogo />
        </header>
      </BackgroundContainer>
    </>
  );
}

export default App;
