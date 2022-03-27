import Axios from 'axios';

export const quizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',
});
