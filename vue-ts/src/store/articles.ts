import { Article } from '@/services/articles';
import { Profile } from '@/services/profile';
import { articleService, commentService } from '@/services';

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

const actions = {
  fetchArticle: async ({ commit }: any, slug: string) => {
    const { data } = await articleService.getArticle(slug);
    commit('setArticle', data.article);
  },
  resetState: ({ commit }: any) => {
    commit('resetState');
  }
};

const mutations = {
  setArticle: (state: ArticlesState, article: Article) => {
    state.article = article;
  },
  resetState: (state: ArticlesState) => {
    state.article = initialState.article;
    state.comments = initialState.comments;
  },
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
