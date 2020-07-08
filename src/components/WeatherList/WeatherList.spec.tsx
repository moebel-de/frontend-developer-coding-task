import React from 'react';
import { render } from '@testing-library/react';
import WeatherList from './WeatherList';
import { data } from '../../api/mock';

describe('<WeatherList />', () => {
  it('should render without crash', async () => {
    const { findByTestId } = render(<WeatherList list={data.list} />);
    expect(await findByTestId('weather-list')).toBeInTheDocument();
  });
});
