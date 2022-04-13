import {quizAPI} from '../../src/configuration/Axios.configuration';

export const getLoginData = async (values) => {
  try {
    const response = await quizAPI.post('/login', {
      email: values.email,
      password: values.password,
    });
    return {token: response.data, error: false};
  } catch (error) {
    const response = await JSON.parse(JSON.stringify(error))
    if(response.status === 401){
      return {token: null, error: 'Wrong Email or Password'}
    }
      return {token: null, error: 'Something went wrong'}
  }
};
