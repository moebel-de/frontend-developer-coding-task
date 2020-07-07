import React from 'react';
import { render } from '@testing-library/react';
import WeatherItem from './WeatherItem';

describe('<WeatherItem />', () => {
  it('should render without crash', () => {
    render(<WeatherItem />);
  });
});
