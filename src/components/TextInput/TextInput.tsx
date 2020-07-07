import React, { ChangeEvent } from 'react';
import { Input } from './styles';

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({ name, placeholder, value, onChange }) => {
  return (
    <Input
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
