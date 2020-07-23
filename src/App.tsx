import React from "react";
import logo from "./logo.svg";
import { BackgroundContainer } from "./components/Background";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundContainer temperatur={10}>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </BackgroundContainer>
    </>
  );
}

export default App;
