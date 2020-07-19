import React from "react";
import styled from "styled-components"

import {AppLogo} from '../Logo'

function Header() {
  return (
    <Container>
        <AppLogo />
        <Title>whatweather?</Title>
    </Container>
  );
}

const Container = styled.header`
    padding: 1em 1.25em;
`

const Title = styled.h1`
    color: rgb(43, 18, 2);
    font-family: Roboto;
    line-height: 1;
    font-size: 15px;
    font-weight: 900;
    margin: 0;
`

export default Header;
