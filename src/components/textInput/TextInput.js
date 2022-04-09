import {TextInput as NativeTextInput} from 'react-native';
import React from 'react';
import {styles} from './TextInput.styles';
import {color} from '../../theme/';

export const TextInput = ({isSensitive = false, style:customStyles, ...rest}) => {
  return (
    <NativeTextInput
      style={[styles.textInputStyles, customStyles]}
      secureTextEntry={isSensitive}
      placeholderTextColor={color.darkGray}
      {...rest}
    />
  );
};
