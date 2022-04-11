import Axios from 'axios';
import {getData} from '../utilities/localStorage';
import {TOKEN_KEY} from '../context/AppContext';
import Config from 'react-native-config';

let quizAPI = Axios.create({
  baseURL: Config.API_URL,
});

(async () => {
  try {
    let token = await getData(TOKEN_KEY || 'authToken');
    quizAPI.defaults.headers.common['Authorization'] = token;
  } catch (error) {
    console.error(error);
  }
})();

export {quizAPI};
