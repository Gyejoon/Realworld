const ID_TOKEN = 'id_token';

export default {
  getToken: () => window.localStorage.getItem(ID_TOKEN),
  setToken: (token: string) => window.localStorage.setItem(ID_TOKEN, token),
  destoryToken: () => window.localStorage.removeItem(ID_TOKEN)
};
