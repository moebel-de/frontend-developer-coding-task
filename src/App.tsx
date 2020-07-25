import React from "react";
import { BackgroundContainer } from "./components/Background";
import { GlobalStyle } from "./style/GlobalStyle";
import { ReactComponent as WWLogo } from "./logo.svg";
import { HeaderContainer } from "./App.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundContainer temperatur={10}>
        <HeaderContainer>
          <WWLogo />
        </HeaderContainer>
      </BackgroundContainer>
    </>
  );
}

export default App;
