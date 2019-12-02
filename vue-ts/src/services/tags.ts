import apiClient from './apiClient';

export type TagsResponse = {
  tags: string[];
};

export default {
  getTags: () => apiClient.get<TagsResponse>('/tags')
};
