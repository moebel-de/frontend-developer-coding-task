import React from 'react';
import { render } from '@testing-library/react';
import TempLabel from './TempLabel';
import { Size } from './styles';

describe('<TempLabel />', () => {
  it('should render without crash', () => {
    render(<TempLabel degree={40} size={Size.normal} />);
  });
});
