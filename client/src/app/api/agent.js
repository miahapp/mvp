import axios, { AxiosResponse } from "axios";
import toast from "react-toastify";

// Base URL to ping the server/backend
axios.defaults.baseURL = "http://localhost:5000/api";

// User login - JWT token
// E.g. When a user logins, save the JWT token in the cookies
axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Token: ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Error handling - 4xx or 5xx errors
axios.interceptors.response.use(undefined, (error) => {
  const { status, data, config } = error.response;
  console.log(JSON.stringify(error, null, "\t")); // printing out the error message nicely
  if (error.message === "Network error" && error.response === undefined) {
    toast.error("Network error");
  }
  if (status === 404) {
    //TODO: Wrap index.js and App in Router - Making it accessible in here
    history.push("/notfound");
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notfound");
  }

  if (status === 500) {
    toast.error("Server error - check the terminal for more info");
  }
  throw error.response;
});

// Response/Packets of data retrieved from the backend
const responseBody = () => response.data;

// Object of the Axios Requests
const requests = {
  get: () => axios.get(url).then(responseBody),
  post: () => axios.post(url, body).then(responseBody),
  put: () => axios.put(url, body).then(responseBody),
  delete: () => axios.delete(url).then(responseBody),
};

// Object of User requests
const User = {
  current: () => requests.get("/user"),
  login: () => requests.post(`/user/login`, user),
  register: () => requests.post(`/user/register`, user),
};

export default {
  User,
};
