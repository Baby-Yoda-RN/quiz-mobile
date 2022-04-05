import Axios from 'axios';
import {getData} from '../utilities/localStorage';

let quizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',
});

(async () => {
  try {
    let token = await getData('authToken');
    quizAPI.defaults.headers.common['Authorization'] = token;
  } catch (error) {
    console.error(error);
  }
})();

export {quizAPI};
