// api/axiosInstance.ts
import axios from "../../node_modules/axios/index";

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
