// src/utils/axiosInstance.ts
import axios from "axios";
import { notifyError } from "../utils/toastUtil";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,   //get baseurl from .env file
});

axiosInstance.interceptors.request.use(
  (config) => {
    debugger;
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


//auto logout  when token get expired
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    debugger;
    if (error.response && error.response.status === 401 || error.response.status === 503) {
      localStorage.removeItem("accessToken");
      notifyError("token expired or you have exeeded rate limiting..");
      window.location.href = "/"; // or navigate to login
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;

