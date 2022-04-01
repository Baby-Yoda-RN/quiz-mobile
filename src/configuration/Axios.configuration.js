import Axios from 'axios';

let token;

if(!token){
  /*
  (async () => {
    token = LocalStorage.getData('AUTH_TOKEN');
  })();
  */
  token = 'AUTH_TOKEN';
}

export const quizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',
});

quizAPI.defaults.headers.common['Authorization'] = token;