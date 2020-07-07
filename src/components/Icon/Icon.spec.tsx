import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon />', () => {
  it('should render without crash', () => {
    render(<Icon name='name' />);
  });
});
