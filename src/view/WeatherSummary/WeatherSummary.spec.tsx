import React from 'react';
import { render } from '@testing-library/react';
import WeatherSummary from './WeatherSummary';

describe('<WeatherSummary />', () => {
  it('should render without crash', () => {
    render(<WeatherSummary />);
  });
});
