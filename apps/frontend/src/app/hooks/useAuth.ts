import { useAuthStore } from '../store/auth.store';
import {
  forgotPasswordApi,
  loginApi,
  registerApi,
  resetPasswordApi,
  verifyOtpApi,
} from '../api/auth.api';

export const useAuth = () => {
  const { user, token, login, logout } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    const data = await loginApi(email, password);
    login(data); // This updates the store
    return data; // Return the data so we can use it immediately
  };

  const handleForgotPassword = async (email: string) => {
    const data = await forgotPasswordApi(email);
    login(data);
    return data;
  };

  const handleVerifyAccount = async (email: string, otp: string) => {
    const data = await verifyOtpApi(email, otp);
    login(data);
    return data;
  };

  const handleResetPassword = async (
    token: string,
    newPassword: string
  ) => {
    const data = await resetPasswordApi(token, newPassword);
    login(data);
    return data;
  };

  const handleRegister = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const data = await registerApi(firstName, lastName, email, password);
    login(data);
    return data; // Return data here too for consistency
  };

  return {
    user,
    token,
    login: handleLogin,
    register: handleRegister,
    logout,
    resetPassword: handleResetPassword,
    forgotPassword: handleForgotPassword,
    verifyAccount: handleVerifyAccount
  };
};
