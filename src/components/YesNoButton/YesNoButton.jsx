import React from 'react';
import { Button } from './YesNoButton.styled';

export const YesNoButton = ({ onBtnClick, text, approve }) => {
  return (
    <Button type="button" $approve={approve} onClick={onBtnClick}>
      {text}
    </Button>
  );
};
