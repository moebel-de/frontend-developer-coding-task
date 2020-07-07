import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

const setup = () => {
  const utils = render(<TextInput placeholder='test placeholder' />);
  const input = utils.getByPlaceholderText(
    'test placeholder'
  ) as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe('<TextInput />', () => {
  it('should render without crash', () => {
    render(<TextInput />);
  });

  it('should render component as input', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: { value: 'test' },
    });
    expect(input.value).toBe('test');
  });
});
