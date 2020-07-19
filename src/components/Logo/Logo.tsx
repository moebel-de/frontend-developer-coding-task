import React from "react";
import styled from "styled-components"

import logo from "../../assets/images/logo.svg";

function Logo() {
  return (
    <Image src={logo} alt="logo" />
  );
}

const Image = styled.img`
    width: 60px;
    height: 27.5px;
`

export default Logo;
