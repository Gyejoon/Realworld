import apiClient from './apiClient';

export const login = (username: string, password: string) =>
  apiClient.post<AuthenticationResponse>('/api/users/login', {
    username,
    password,
  });

export type AuthenticationResponse = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};
