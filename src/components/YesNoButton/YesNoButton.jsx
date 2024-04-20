import React from 'react';
import { Button } from './YesNoButton.styled';

const YesNoButton = ({ onBtnClick, text, approve }) => {
  return (
    <Button approve={approve} onClick={onBtnClick}>
      {text}
    </Button>
  );
};

export default YesNoButton;
