import React, {useState} from 'react';
import {LoginScreenView} from './LoginScreen.view';
import {useAppValue} from '../../context/AppProvider';
import {getLoginData} from '../../data/getLoginData';
import {storeData} from '../../utilities/localStorage';
import {TOKEN_KEY, SIGN_IN} from '../../constants/constants';
import {isValidEmail} from '../../utilities';

export const LoginScreen = () => {
  const {dispatch} = useAppValue();
  const [errors, setErrors] = useState({
    emailError: '',
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
    try {
      dispatch({type: SIGN_IN, token: data.token});
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginButtonPress = async () => {
    setErrors({emailError: '', credentialError: ''});
    setIsLoading(true);
    if (isValidEmail(values.email) || !values.email) {
      setErrors(prevState => ({
        ...prevState,
        emailError: 'Valid email is required',
      }));
      setIsLoading(false);
    } else{
      const response = await signIn(values);
      if (response.error) {
        setErrors(prevState => ({
          ...prevState,
          credentialError: response.error,
        }));
        setIsLoading(false);
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
