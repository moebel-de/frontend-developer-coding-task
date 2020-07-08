import React from 'react';
import { Container, Colors } from './styles';

type Props = {
  temp?: number;
  children: React.ReactNode;
};

const TempBackground: React.FC<Props> = ({ children, temp = 10 }) => {
  const tempResult = temp >= 15 ? Colors.hot : Colors.cold;

  return <Container temp={tempResult}>{children}</Container>;
};

export default TempBackground;
