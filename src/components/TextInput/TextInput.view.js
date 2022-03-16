import { Text, TextInput as NativeTextInput } from 'react-native'
import React from 'react'
import {styles} from './TextInput.styles'

export const TextInputView = ({placeHolder, isSensitive, ...rest}) => {
  return (
    <NativeTextInput 
        style={styles.textInputStyles}
        placeholder={placeHolder} 
        secureTextEntry={isSensitive?true:false}
        placeholderTextColor={'rgba(51,51,51,0.45)'}
        {...rest}/> 
  )
}