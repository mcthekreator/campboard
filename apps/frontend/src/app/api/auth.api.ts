import axios from 'axios';
import { AuthResponse } from '../types/auth..types';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

export const loginApi = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const { data } = await API.post('/auth/login', { email, password });
  return data;
};



export const registerApi = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const { data } = await API.post('/auth/register', {
    firstName,
    lastName,
    email,
    password,
  });
  return data;
};
export const forgotPasswordApi = async (
  email: string
): Promise<AuthResponse> => {
  const { data } = await API.post('/auth/forgot-password', { email });
  return data;
};

export const resetPasswordApi = async (
  token: string,
  newPassword: string
): Promise<AuthResponse> => {
  const { data } = await API.post('/auth/reset-password', { token, newPassword });
  return data;
};

export const verifyOtpApi = async (
  email: string,
  otp: string
): Promise<AuthResponse> => {
  const { data } = await API.post('/auth/verify-user', { email, otp });
  return data;
};