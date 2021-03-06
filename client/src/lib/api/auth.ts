import apiClient from './apiClient';

export type RegisterFormData = {
  username: string;
  password: string;
  nickname: string;
  mobile_phone_number: string | null;
};

export type AuthResponse = {};

export const localRegister = (formData: RegisterFormData) =>
  apiClient.post<AuthResponse>('/api/v1/auth/register/local', formData);

export type LoginFormData = {
  username: string;
  password: string;
};

export const localLogin = (formData: LoginFormData) =>
  apiClient.post<AuthResponse>('/api/v1/auth/login/local', formData);

export const logout = () => {
  apiClient.post('/api/v1/auth/logout');
};
