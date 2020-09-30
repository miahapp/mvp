import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from '../../index';

// Base URL to ping the server/backend
axios.defaults.baseURL = `http://localhost:5000/api`;

// User login - JWT token
// E.g. When a user logins, save the JWT token in the cookies
// axios.interceptors.request.use(
//   (config) => {
//     const token = window.localStorage.getItem('jwt');
//     if (token) config.headers.Authorization = `Token: ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

//Error handling - 4xx or 5xx errors
axios.interceptors.response.use(undefined, (error) => {
  const { status, data, config } = error;
  console.log(JSON.stringify(error, null, '\t')); // printing out the error message nicely
  if (error.message === 'Network error' && error.response === undefined) {
    toast.error('Network error');
  }
  if (status === 404) {
    history.push('/notfound');
  }
  if (
    status === 400 &&
    config.method === 'get'
    // data.errors.hasOwnProperty("id")
  ) {
    history.push('/notfound');
  }

  if (status === 500) {
    toast.error('Server error - check the terminal for more info');
  }
  throw error.response;
});

// Response/Packets of data retrieved from the backend
const responseBody = (response) => response.data;

// Object of the Axios Requests
const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

// Object of User requests
const User = {
  current: () => requests.get('/user'),
  login: (user) => {
    requests.post(`/login`, user);
  },
  register: (user) => {
    // console.log(user);
    requests.post(`/register`, user);
  },
};

// Object of word bank
const WordBank = {
  list: () => requests.get(`/allWord`),
  details: (id) => requests.get(`/findById/${id}`),
  categories: () => requests.get(`/categories`),
};

// Object of word count
const WordCount = {
  list: () => requests.get(`/wordcount`),
  add: (sentence) => requests.post(`/wordcount/add`, sentence),
};

export default {
  User,
  WordBank,
  WordCount,
};
