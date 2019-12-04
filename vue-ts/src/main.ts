import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import calendar from 'dayjs/plugin/calendar';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.filter('date', (value: Date) => {
  dayjs.locale('ko');
  dayjs.extend(calendar);

  return dayjs(value).calendar();
});

router.beforeEach((to, from, next: any) =>
  Promise.all([store.dispatch('auth/checkAuth')]).then(next)
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
