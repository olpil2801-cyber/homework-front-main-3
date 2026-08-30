import React from 'react';

type InputPropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  id?: string;
  placeholder?: string;
};

export const Input: React.FC<InputPropsType> = ({ value, onChange, onEnter, id, placeholder }) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.();
    }
  };

  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};