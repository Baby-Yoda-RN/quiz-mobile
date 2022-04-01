import Axios from 'axios';

export const quizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/',

});

export const computerQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/computer',

});
export const generalKnowledgeQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/general_knowledge',

});
export const animalsQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/animals',

});
export const mathQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/mathematics',

});
export const vehiclesQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/vehicles',

});
export const videoGamesQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/video_games',

});
export const politicsQuizAPI = Axios.create({
  baseURL:
    'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getquestions/politics',

});