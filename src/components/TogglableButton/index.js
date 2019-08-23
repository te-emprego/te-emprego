import React, { useState } from 'react';

import { Button } from './styles';

const TogglableButton = ({ text, changeValue, value }) => {
  const [isActive, setActive] = useState(value);

  const emitValue = () => {
    changeValue(value || '');
  };

  const handleClick = () => {
    setActive(!isActive);
    emitValue();
  };

  return (
    <Button isActive={isActive} onClick={() => handleClick()}>
      {text}
    </Button>
  );
};

// TogglableButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   changeValue: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default TogglableButton;
