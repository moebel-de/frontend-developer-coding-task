import React from 'react';
import { Label, Size } from './styles';

type TempLabelProps = {
  degree: number;
  size: Size;
};

const TempLabel: React.FC<TempLabelProps> = ({ degree, size }) => {
  const roundDegree = Math.round(degree);

  return <Label size={size}>{`${roundDegree}°`}</Label>;
};

export default TempLabel;
