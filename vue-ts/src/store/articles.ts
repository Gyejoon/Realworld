import { Profile } from '@/services/profile';
import { CreateArticleRequest } from '@/services/articles';

export type ArticlesState = {
  article: {
    author: Profile;
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
  comments: Comment[];
};

const initialState = {
  article: {
    author: {
      username: '',
      following: false
    },
    title: '',
    description: '',
    body: '',
    tagList: []
  },
  comments: []
};

const state: ArticlesState = {
  ...initialState
};

const getters = {
  article: (state: ArticlesState) => state.article,
  comments: (state: ArticlesState) => state.comments
};

const actions = {};

const mutations = {
  setArticle: (state: ArticlesState, article: CreateArticleRequest) => {},
  tagAdd: (state: ArticlesState, tag: string) => {},
  tagRemove: (state: ArticlesState, tag: string) => {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
