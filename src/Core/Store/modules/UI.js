const UI = {
  namespaced: true,
  state: {
    drawer: true,
  },
  getters: {
    Drawer: state => state.drawer,
  },
  mutations: {
    setDrawer(state, payload) {
      state.drawer = payload;
    },
  },
  actions: {
    Drawer: ({ commit }, status) => {
      commit('setDrawer', status);
    },
  },
};

export default UI;
