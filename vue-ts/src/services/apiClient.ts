import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

const apiClient = axios.create({
  baseURL: API_ROOT,
  timeout: 10000
});

export const setHeader = (jwt: string) => {
  apiClient.defaults.headers['authorization'] = `Token ${jwt}`;
};

export default apiClient;
