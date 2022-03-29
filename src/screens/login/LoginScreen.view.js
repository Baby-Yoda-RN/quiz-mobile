import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Container, TextInput} from '../../components';
import {color} from '../../theme';
import {styles} from './loginScreen.styles';

export const LoginScreenView = ({
  errors,
  values,
  setValues,
  isLoading,
  handleLoginButtonPress,
}) => {
  return (
    <View style={styles.container}>
      {/* 
      You can show this error if the credential got
      <View style={styles.errorContainer}>
        <Text style={styles.error}>Wrong credentials</Text>
      </View> 
      */}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          value={values.email}
          onChangeText={email =>
            setValues(prevState => ({
              ...prevState,
              email,
            }))
          }
        />
        {errors.emailError !== '' && (
          <Text style={styles.error}>{errors.emailError}</Text>
        )}
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          isSensitive={true}
          placeholder={'Password'}
          value={values.password}
          onChangeText={password =>
            setValues(prevState => ({
              ...prevState,
              password,
            }))
          }
        />
        {errors.passwordError !== '' && (
          <Text style={styles.error}>{errors.passwordError}</Text>
        )}
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
