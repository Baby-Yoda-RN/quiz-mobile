import React, {useState, useEffect} from 'react';
import {LoginScreenView} from './LoginScreen.view';

export const LoginScreen = () => {
  const [errors, setErrors] = useState({emailError: '', passwordError: ''});
  const [values, setValues] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginButtonPress = () => {
    setErrors({emailError: '', passwordError: ''});
    if (!values.email) {
      setErrors(prevState => ({
        ...prevState,
        emailError: 'Email is required',
      }));
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setErrors(prevState => ({
        ...prevState,
        emailError: 'Invalid email',
      }));
    }
    if (!values.password) {
      setErrors(prevState => ({
        ...prevState,
        passwordError: 'Password is required',
      }));
    }
    if(!errors.emailError && !errors.passwordError){
        //If there's no errors we can fetch the login api and check if the credentials are correct
    }
  };

  return (
    <LoginScreenView
      errors={errors}
      values={values}
      setValues={setValues}
      isLoading={isLoading}
      handleLoginButtonPress={handleLoginButtonPress}
    />
  );
};
