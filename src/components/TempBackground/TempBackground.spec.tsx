import React from 'react';
import { render } from '@testing-library/react';
import TempBackground from './TempBackground';

describe('<TempBackground />', () => {
  it('should render without crash', () => {
    render(<TempBackground>Test</TempBackground>);
  });
});
