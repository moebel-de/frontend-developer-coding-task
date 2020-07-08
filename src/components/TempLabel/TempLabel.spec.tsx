import React from 'react';
import { render } from '@testing-library/react';
import TempLabel from './TempLabel';

describe('<TempLabel />', () => {
  it('should render without crash', () => {
    render(<TempLabel />);
  });
});
