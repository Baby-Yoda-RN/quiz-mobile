import { View, Text } from 'react-native'
import React from 'react'
import {TextInputView} from './TextInput.view'

export const TextInput = ({placeHolder,isSensitive = false, ...rest}) => {
  return (
    <TextInputView placeHolder={placeHolder} isSensitive={isSensitive} {...rest}/>
  )
}