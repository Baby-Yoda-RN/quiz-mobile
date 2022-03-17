import {TextInput as NativeTextInput, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './TextInput.styles';

/*
 * TextInput Component
 * isSensitive is used to know if is a password text input
 */

export const TextInputView = ({
  placeHolder,
  isSensitive,
  customStyles,
  ...rest
}) => {
  //Merge default styles and user styles
  const flattenStyle = StyleSheet.flatten([
    styles.textInputStyles,
    customStyles,
  ]);

  return (
    <NativeTextInput
      style={flattenStyle}
      placeholder={placeHolder}
      secureTextEntry={isSensitive ? true : false}
      placeholderTextColor={'rgba(51,51,51,0.45)'}
      {...rest}
    />
  );
};

