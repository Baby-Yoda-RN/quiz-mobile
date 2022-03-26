import React, {useState, useEffect} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import {Button, Container, TextInput} from '../../components'
import {styles} from './loginScreen.styles'

export const LoginScreen = () => {

  const [errors,setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setErrors(['Email error','Password error'])
  },[])

  const handleLoginButtonPress = () => {
    setIsLoading(true)
  }

  return (
  <Container>
    <View style={styles.textInputContainer}>
      <TextInput 
        placeholder={'Email'}/>
      {errors[0] != null && <Text style={styles.error}>{errors[0]}</Text>}
    </View>
    <View style={styles.textInputContainer}>
      <TextInput 
        isSensitive={true}
        placeholder={'Password'}/>
      {errors[1] != null && <Text style={styles.error}>{errors[1]}</Text>}
    </View>
    <View style={styles.buttonContainer}>
      {isLoading?
        <ActivityIndicator size={'large'}/>
        :
        <Button  title={'Login'} buttonStyle={styles.button} onPress={handleLoginButtonPress}/>
      }
    </View>
    
  </Container>
  )
}