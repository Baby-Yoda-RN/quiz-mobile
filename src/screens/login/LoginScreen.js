import React, {useState} from 'react';
import {LoginScreenView} from './LoginScreen.view';
import { useAppValue } from '../../context/AppProvider';
import { getLoginData } from '../../data/getLoginData';
import { storeData } from '../../utilities/localStorage';
import {TOKEN_KEY, SIGN_IN} from '../../constants'

export const LoginScreen = () => {
  const {dispatch} = useAppValue()
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    credentialError: '',
  });
  const [values, setValues] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async values => {
    let data = await getLoginData(values);
    if (data.error) {
      return data;
    }
    await storeData(TOKEN_KEY, data.token);
    dispatch({type: SIGN_IN, token: data.token});
    return data;
  };

  const handleLoginButtonPress = async () => {
    setIsLoading(true)
    setErrors({emailError: '', passwordError: '', credentialError: ''});
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
    setIsLoading(false)
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
