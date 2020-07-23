import React from "react";
import { TempBackgroundColors, TempBackgroundContainer } from "./style";

interface BackgroundProps {
  temperatur: number;
  children: React.ReactNode;
}

export const BackgroundContainer: React.FC<BackgroundProps> = ({
  temperatur,
  children,
}) => {
  const tempColor =
    temperatur >= 15 ? TempBackgroundColors.warm : TempBackgroundColors.cold;

  return (
    <TempBackgroundContainer temp={tempColor}>
      {children}
    </TempBackgroundContainer>
  );
};
