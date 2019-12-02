import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import home from './home';
import articles from './articles';
import profile from './profile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    home,
    articles,
    profile
  }
});
