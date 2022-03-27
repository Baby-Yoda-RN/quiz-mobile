import React, {useState, useEffect} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import {Button, Container, TextInput} from '../../components'
import { color } from '../../theme'
import {styles} from './loginScreen.styles'

export const LoginScreen = () => {

  const [errors,setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setErrors(['Invalid Email','Password is required'])
  },[])

  const handleLoginButtonPress = () => {
    setIsLoading(true)
  }

  return (
    <View style={styles.container}>
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
        <ActivityIndicator size={'large'} color={color.primary}/>
        :
        <Button  title={'Login'} buttonStyle={styles.button} onPress={handleLoginButtonPress}/>
  }
    </View>
  </View>
  )
}