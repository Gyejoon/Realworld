import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://conduit.productionready.io',
});

export default apiClient;
