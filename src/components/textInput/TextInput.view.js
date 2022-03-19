import {TextInput as NativeTextInput } from 'react-native';
import React from 'react';
import {styles} from './TextInput.styles';
import {color} from '../../theme/'

/*
 * TextInput Component
 * isSensitive is used to know if is a password text input
 */

export const TextInputView = ({
  placeHolder,
  isSensitive = false,
  customStyles,
  ...rest
}) => {

  return (
    <NativeTextInput
      style={[styles.textInputStyles, customStyles]}
      placeholder={placeHolder}
      secureTextEntry={isSensitive}
      placeholderTextColor={color.lightGray}
      {...rest}
    />
  );
};

