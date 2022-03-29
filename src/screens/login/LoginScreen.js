import React, {useState, useEffect} from 'react';
import {quizAPI} from '../../configuration/Axios.configuration';
import {LoginScreenView} from './LoginScreen.view';

export const LoginScreen = () => {
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    credentialError: '',
  });
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
    if (errors.emailError === '' && errors.passwordError === '') {
      const fetchLoginData = async () => {
        setIsLoading(true);
        quizAPI
          .post('/login', {
            TableName: 'Users',
            Email: values.email,
            Password: values.password,
          })
          .then(response => {
            if (response.data === 'Wrong Email or Password.') {
              setErrors(prevState => ({
                ...prevState,
                credentialError: response.data,
              }));
            } else {
              // Temporary alert until navigation is handled
              alert('Login Successful');
            }
          })
          .catch(error => {
            console.log('Error: ', error);
          });
        setIsLoading(false);
      };
      fetchLoginData();
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
