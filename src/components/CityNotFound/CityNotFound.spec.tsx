import React from 'react';
import { render } from '@testing-library/react';
import CityNotFound from './CityNotFound';

describe('<CityNotFound />', () => {
  it('should render without crash', () => {
    render(<CityNotFound />);
  });
});
