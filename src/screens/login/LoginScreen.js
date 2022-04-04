import React, {useState, useContext} from 'react';
import {LoginScreenView} from './LoginScreen.view';
import {AppContext} from '../../context/AppContext';

export const LoginScreen = () => {
  const {signIn} = useContext(AppContext);

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    credentialError: '',
  });
  const [values, setValues] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginButtonPress = async () => {
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
    if (errors.emailError === '' && errors.passwordError === '') {
      const response = await signIn(values);
      if (response.error) {
        setErrors(prevState => ({
          ...prevState,
          credentialError: response.error,
        }));
      }
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
