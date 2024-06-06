import axios from 'axios';

const API_URL = '/api/auth/';

const register = (name, email, password, role) => {
  return axios.post(API_URL + 'register', { name, email, password, role });
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', { email, password });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  register,
  login,
  getCurrentUser,
};

export default AuthService;
