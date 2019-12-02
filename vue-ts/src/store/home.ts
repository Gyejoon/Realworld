import { Article, ArticleQueryParam, ArticleResponse } from '@/services/articles';
import { articleService, tagService } from '@/services';

export type HomeState = {
  articles: Article[];
  tags: string[];
  isLoading: boolean;
  articlesCount: number;
};

const state: HomeState = {
  articles: [],
  tags: [],
  isLoading: false,
  articlesCount: 0
};

const getters = {
  getArticles: (state: HomeState) => state.articles,
  getTags: (state: HomeState) => state.tags,
  isLoading: (state: HomeState) => state.isLoading,
  getArticlesCount: (state: HomeState) => state.articlesCount
};

const actions = {
  async fetchArticles({ commit }: any, params: ArticleQueryParam) {
    commit('fetchStart');
    try {
      const { data } = await articleService.getArticles(params);
      commit('fetchEnd', data.articles, data.articlesCount);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchTags({ commit }: any) {
    try {
      const { data } = await tagService.getTags();
      commit('setTags', data.tags);
    } catch (e) {
      console.log(e);
    }
  }
};

const mutations: any = {
  fetchStart(state: HomeState) {
    state.isLoading = true;
  },
  fetchEnd(state: HomeState, articles: Article[], articlesCount: number) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  },
  setTags(state: HomeState, tags: string[]) {
    state.tags = tags;
  },
  updateArticleInList(state: HomeState, data: Article) {
    state.articles = state.articles.map(article => {
      if (article.slug !== data.slug) {
        return article;
      }

      article.favorited = data.favorited;
      article.favoritesCount = data.favoritesCount;
      return article;
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
