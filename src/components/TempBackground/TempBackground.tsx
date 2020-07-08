import React from 'react';
import { Container, BackgroundColors } from './styles';

type Props = {
  temp: number;
  children: React.ReactNode;
};

const TempBackground: React.FC<Props> = ({ children, temp }) => {
  const tempResult = temp >= 15 ? BackgroundColors.hot : BackgroundColors.cold;

  return <Container temp={tempResult}>{children}</Container>;
};

export default TempBackground;
