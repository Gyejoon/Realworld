import { Profile } from './profile';
import apiClient from './apiClient';

export type CommentsResponse = {
  comments: Comment[];
};

export type CommentResponse = {
  comment: Comment;
};

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: Profile;
}

export type CreateArticleCommentRequest = {
  comment: {
    body: string;
  };
};

export default {
  getArticleComments: (slug: string) =>
    apiClient.get<CommentsResponse>(`/articles/${slug}/comments`),
  createArticleComment: (slug: string, body: CreateArticleCommentRequest) =>
    apiClient.post<CommentResponse>(`/articles/${slug}/comments`, body),
  deleteArticleComment: (slug: string, id: number) =>
    apiClient.delete(`/articles/${slug}/comments/${id}`)
};
