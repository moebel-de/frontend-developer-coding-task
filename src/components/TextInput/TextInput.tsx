import React, { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import { Input } from './styles';

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({
  name,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
}) => {
  return (
    <Input
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default TextInput;
