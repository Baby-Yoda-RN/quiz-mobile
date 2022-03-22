import React from 'react';
import {ButtonView} from './Button.view';

export const Button = ({
  title,
  isDisabled,
  onPress,
  buttonStyle,
  titleStyle,
}) => {
  return (
    <ButtonView
      title={title}
      press={onPress}
      isDisabled={isDisabled}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
    />
  );
};
