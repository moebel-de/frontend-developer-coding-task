import React from 'react';
import { render } from '@testing-library/react';
import WeatherList from './WeatherList';

describe('<WeatherList />', () => {
  it('should render without crash', () => {
    render(<WeatherList />);
  });
});
