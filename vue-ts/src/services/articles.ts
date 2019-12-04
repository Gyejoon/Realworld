import { Profile } from './profile';
import apiClient from './apiClient';

export type ArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};

export type ArticleResponse = {
  article: Article;
};

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

export type ArticleQueryParam = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
};

export type ArticleForm = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};

export default {
  getArticles: (params: ArticleQueryParam = {}) =>
    apiClient.get<ArticlesResponse>('/articles', { params }),
  getArticleFeed: (params: ArticleQueryParam = {}) =>
    apiClient.get<ArticlesResponse>('/articles/feed', { params }),
  getArticle: (slug: string) => apiClient.get<ArticleResponse>(`/articles/${slug}`),
  createArticle: (body: ArticleForm) =>
    apiClient.post<ArticleResponse>('/articles', {
      article: {
        ...body
      }
    }),
  updateArticle: (slug: string, body: ArticleForm) =>
    apiClient.put<ArticleResponse>(`/articles/${slug}`, {
      article: {
        ...body
      }
    }),
  deleteArticle: (slug: string) => apiClient.delete(`/articles/${slug}`)
};
