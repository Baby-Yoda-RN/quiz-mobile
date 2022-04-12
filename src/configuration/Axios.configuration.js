import axios from 'axios';
import {getData} from '../utilities/localStorage';
import {TOKEN_KEY} from '../context/AppContext';

const instance = axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',
});

instance.interceptors.request.use(
  async config => {
    const token = await getData(TOKEN_KEY || 'authToken');
    if (token) config.headers.Authorization = token;
    return config;
  },
  error => Promise.reject(error),
);

export const quizAPI = {
  get: async endPoint => {
    return instance
      .get(endPoint)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },

  post: async (endPoint, data) => {
    return instance
      .post(endPoint, data)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },
};
