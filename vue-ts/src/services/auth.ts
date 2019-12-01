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
  email: string;
  bio: string;
  image: string;
};

export default {
  current: async () => {
    const response = await apiClient.get<AuthResponse>('/user');
    return response.data;
  },
  login: async (request: LoginRequest) => {
    return apiClient.post<AuthResponse>('/users/login', {
      user: {
        ...request
      }
    });
  },
  register: async (request: RegisterRequest) => {
    const response = await apiClient.post<AuthResponse>('/users', {
      user: {
        ...request
      }
    });

    return response.data;
  },
  update: async (request: UpdateRequest) => {
    const response = await apiClient.put<AuthResponse>('/api/user', {
      user: {
        ...request
      }
    });

    return response.data;
  }
};
