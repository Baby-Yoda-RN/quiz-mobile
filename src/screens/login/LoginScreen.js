import React from 'react'
import {Button, Container, TextInput} from '../../components'
import { color } from '../../theme'
import {styles } from './loginScreen.styles'

export const LoginScreen = () => {
  return (
  <Container background={color.midGray} containerStyle={styles.container}>
    <TextInput 
        placeholder={'Email'}
        style={styles.textInput}/>
    <TextInput 
        placeholder={'Email'}
        style={styles.textInput}/>
    <Button  title={'Login'} buttonStyle={styles.button}/>
  </Container>
  )
}