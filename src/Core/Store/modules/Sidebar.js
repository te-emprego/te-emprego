const Sidebar = {
  namespaced: true,
  state: {
    modules: [
      {
        icon: 'fas fa-home',
        text: 'Home',
        route: {
          name: 'Home',
        },
      },
      {
        icon: 'fas fa-box',
        text: 'Caixa de Entrada',
        children: [
          {
            route: 'CaixaEntrada',
            text: 'Entrada',
          },
        ],
      },
      {
        icon: 'fas fa-box',
        text: 'Caixa de Batata',
        children: [
          {
            route: 'CaixaEntrada',
            text: 'Entrada',
          },
        ],
      },
    ],
  },
  getters: {
    MODULES: state => state.modules,
  },
  mutations: {
    setModules(state, payload) {
      state.modules = payload;
    },
  },
  actions: {
    MODULES: ({ commit }, payload) => {
      commit('setModules', payload);
    },
  },
};

export default Sidebar;
