import axios from "axios";

const API_URL = "http://localhost:8002";

export const Login = (payload) => {
  const url = `${API_URL}/auth/login`;
  return axios.post(url, payload);
};

export const Register = (regData) => {
  const url = `${API_URL}/auth/register`;
  return axios.post(url, regData);
};
