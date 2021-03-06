import React from 'react';
import {View, Text} from 'react-native';
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
      <View style={styles.errorContainer}>
        {errors.credentialError !== '' && (
          <Text style={styles.error}>{errors.credentialError}</Text>
        )}
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
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
      </View>
      <View style={styles.buttonContainer}>
        {isLoading ? (
          <Container isLoading={isLoading} />
        ) : (
          <Button
            isDisabled={
              values.email.length && values.password.length > 0 ? false : true
            }
            title={'Login'}
            onPress={handleLoginButtonPress}
          />
        )}
      </View>
    </View>
  );
};
