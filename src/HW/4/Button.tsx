import React from 'react';

type ButtonPropsType = {
  callBack: () => void;
  name: React.ReactNode;
};

export const Button: React.FC<ButtonPropsType> = ({ callBack, name }) => {
  const callBackHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    callBack();
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {name}
    </button>
  );
};