import Axios from 'axios';
import {getData, storeData} from '../utilities/localStorage';

let token;

if(!token){
  (async () => {
    try{
    token = await getData('AUTH_TOKEN');
    }catch(error){
      console.log(error);
    }

  })();
}


export const quizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',
});
quizAPI.defaults.headers.common['Authorization'] = token;