import React, {useState} from 'react';
import {LoginScreenView} from './LoginScreen.view';
import { useAppValue } from '../../context/AppProvider';
import { getLoginData } from '../../data/getLoginData';
import { storeData } from '../../utilities/localStorage';

export const LoginScreen = () => {
  const {dispatch} = useAppValue()
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    credentialError: '',
  });
  const [values, setValues] = useState({email: 'First.Last@gmail.com', password: 'First.Last@gmail.com'});
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async values => {
    let data = await getLoginData(values);
    if (data.error) {
      return data;
    }
    await storeData('authToken', data.token);
    dispatch({type: 'SIGN_IN', token: data.token});
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
