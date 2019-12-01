import axios from 'axios';
import store from '@/store';

const API_ROOT = 'https://conduit.productionready.io/api';

const apiClient = axios.create({
  baseURL: API_ROOT,
  timeout: 10000
});

// apiClient.interceptors.request.use(
//   async (config: any) => {
//     await store.dispatch('auth/inspectToken');

//     config.url = encodeURI(config.url);
//     config.headers.Authorization = `bearer ${store.getters['auth/accessToken']}`;

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default apiClient;
