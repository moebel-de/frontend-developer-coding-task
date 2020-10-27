import React from "react";
import { HeaderTitle, HeaderContainer } from "./header.element";
import logo from "../../logo.svg";
import Icon from "../icon";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} className="App-logo" alt="logo" />
      <HeaderTitle>whatweather?</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
