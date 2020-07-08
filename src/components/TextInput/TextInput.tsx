import React, { ChangeEvent, KeyboardEvent } from 'react';
import { Input } from './styles';

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({
  name,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <Input
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextInput;
