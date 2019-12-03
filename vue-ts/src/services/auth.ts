import apiClient from './apiClient';

export type AuthResponse = {
  user: User;
};

export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string;
  image?: string;
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type UpdateRequest = {
  email?: string;
  username?: string;
  bio?: string;
  image?: string;
  password?: string;
};

export default {
  current: async () => apiClient.get<AuthResponse>('/user'),
  login: async (request: LoginRequest) => {
    return apiClient.post<AuthResponse>('/users/login', {
      user: {
        ...request
      }
    });
  },
  register: async (request: RegisterRequest) => {
    return apiClient.post<AuthResponse>('/users', {
      user: {
        ...request
      }
    });
  },
  update: async (request: UpdateRequest) => {
    return apiClient.put<AuthResponse>('/user', {
      user: {
        ...request
      }
    });
  }
};
