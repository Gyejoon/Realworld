import apiClient from './apiClient';

export type ProfileResponse = {
  profile: Profile;
};

export interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
}

export default {
  getProfile: (username: string) => apiClient.get<ProfileResponse>(`/profiles/${username}`),
  followUser: (username: string) => apiClient.post<ProfileResponse>(`/profiles/${username}`),
  unfollowUser: (username: string) => apiClient.delete<ProfileResponse>(`/profiles/${username}`)
};
