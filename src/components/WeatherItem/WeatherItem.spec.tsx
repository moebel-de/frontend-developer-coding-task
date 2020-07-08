import React from 'react';
import { render } from '@testing-library/react';
import WeatherItem from './WeatherItem';
import { data } from '../../api/mock';

describe('<WeatherItem />', () => {
  it('should render without crash', () => {
    render(<WeatherItem item={data.list[0]} />);
  });
});
