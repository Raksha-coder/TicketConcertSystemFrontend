// api/authApi.ts
import axiosInstance from './axiosInstance';
import { encryptData } from '../utils/cryptoUtil';
import { UserRegisterRequest } from '../models/UserRegisterRequest';

const COMMON = "http://localhost:5163/";
const POST_REGISTER = COMMON +"api/User/register";
const POST_Login = COMMON+"api/User/login";

export const registerUser = async (data:UserRegisterRequest) => {
  debugger;
  const response = await axiosInstance.post(POST_REGISTER , data);
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const payload = {
    email: encryptData(email),
    passwordHash: encryptData(password),
  };
  const response = await axiosInstance.post(POST_Login, payload);
  return response.data;
};
