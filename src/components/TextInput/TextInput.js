import React from 'react';
import {TextInputView} from './TextInput.view';

export const TextInput = ({
  placeHolder,
  isSensitive = false,
  style,
  ...rest
}) => {
  return (
    <TextInputView
      placeHolder={placeHolder}
      isSensitive={isSensitive}
      customStyles={style}
      {...rest}
    />
  );
};

