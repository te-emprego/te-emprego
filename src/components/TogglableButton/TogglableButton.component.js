import React, { useState } from 'react';
import { Button } from './TogglableButton.style';

const TogglableButton = ({text, changeValue, value}) => {
  const [isActive, setActive] = useState(value);

  const emitValue = () => {
    changeValue(value || '');
  };

  const _handleClick = () => {
    setActive(!isActive);
    emitValue();
  };

  return (
    <Button 
      isActive={ isActive }
      onClick={() => _handleClick()}
    >{ text }</Button>  
  );
};

export default TogglableButton;