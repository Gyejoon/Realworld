import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next: any) =>
  Promise.all([store.dispatch('auth/checkAuth')]).then(next)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
