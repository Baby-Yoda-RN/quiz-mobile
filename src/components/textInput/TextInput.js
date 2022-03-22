import {TextInput as NativeTextInput } from 'react-native';
import React from 'react';
import {styles} from './TextInput.styles';
import {color} from '../../theme/'


export const TextInput = ({
  placeHolder,
  isSensitive = false,
  style:customStyles,
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

