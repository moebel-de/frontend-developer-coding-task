import React from "react";

import { Logo } from "../Logo";
import { Container, Title } from "./styles";

function AppHeader() {
  return (
    <Container>
      <Logo />
      <Title>whatweather?</Title>
    </Container>
  );
}

export default AppHeader;
