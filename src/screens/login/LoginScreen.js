import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Container, TextInput} from '../../components';
import {color} from '../../theme';
import {styles} from './loginScreen.styles';

export const LoginScreen = () => {
  const [errors, setErrors] = useState({emailError:'',passwordError:''});
  const [values, setValues] = useState({email:'',password:''})
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginButtonPress = () => {
    setErrors({emailError:'',passwordError:''})
    if(!values.email){
      setErrors(prevState => ({
        ...prevState,
        emailError:'Email is required'
      }))
    }
    if(!values.password){
      setErrors(prevState => ({
        ...prevState,
        passwordError:'Password is required'
      }))
    }
    console.log(errors)
  };

  return (
    <View style={styles.container}>
    <View style={styles.errorContainer}>
      <Text style={styles.error}>Wrong credentials</Text>
    </View>
      <View style={styles.textInputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder={'Email'}
          value={values.email}
          onChangeText={email => setValues(prevState => ({
            ...prevState,
            email,
          }))}
        />
        {errors.emailError !== '' && <Text style={styles.error}>{errors.emailError}</Text>}
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          isSensitive={true}
          placeholder={'Password'}
          value={values.password}
          onChangeText={password => setValues(prevState => ({
            ...prevState,
            password,
          }))}
        />
        {errors.passwordError !== '' && <Text style={styles.error}>{errors.passwordError}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={color.primary} />
        ) : (
          <Button
            title={'Login'}
            buttonStyle={styles.button}
            onPress={handleLoginButtonPress}
          />
        )}
      </View>
    </View>
  );
};
