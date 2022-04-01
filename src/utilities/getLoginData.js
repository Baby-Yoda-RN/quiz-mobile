import { quizAPI } from '../../src/configuration/Axios.configuration';

export const getLoginData = async (values) => {
  await quizAPI
    .post('/login', {
      TableName: 'Users',
      Email: values.email,
      Password: values.password,
    })
    .then(response => {
      if (response.data === 'Wrong Email or Password.') {
        return {token: null, error:response.data}
      } else {
        return {token:response.data, error:false}
      }
    })
    .catch(error => {
      console.error(error);
    });
};
