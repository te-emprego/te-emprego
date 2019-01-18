const Cookies = require('js-cookie');

const Auth = {
  namespaced: true,
  state: {
    token: Cookies.get('Auth/token'),
  },
  getters: {
    TOKEN: state => state.token,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    TOKEN: ({ commit }, payload) => {
      Cookies.set('Auth/token', payload, { expires: 0.2 });
      commit('setToken', payload);
    },
    VERIFY_TOKEN: () => new Promise((resolve) => {
      setInterval(() => resolve(), 2500);
    }),
  },
};

export default Auth;
