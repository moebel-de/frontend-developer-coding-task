import React from "react";

import { Background } from "./styles";
import { BackgroundTypes } from "./types";

type Props = {
  temperature: number;
  children: React.ReactNode;
};

function AppBackground({ children, temperature }: Props) {
  const backgroundType =
    temperature >= 15 ? BackgroundTypes.hot : BackgroundTypes.cold;

  return (
    <Background type={backgroundType} data-testid="app-background">
      {children}
    </Background>
  );
}

export default AppBackground;
