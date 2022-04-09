import Axios from 'axios';
import {getData} from '../utilities/localStorage';
import {TOKEN_KEY} from '../context/AppContext';

export const axiosInit = async () => {
  let token = await getData(TOKEN_KEY || 'authToken');

  Axios.defaults.headers.common['Authorization'] = token;

  return Axios.create({
    baseURL:
      'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',
  });
};
