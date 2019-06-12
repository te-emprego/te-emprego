const Jobs = {
  namespaced: true,
  state: {
    jobs: [
      {
        _id: 1,
        title: 'Desenvolvedor Front End',
        description: 'Atuar como desenvolvedor front end. As responsabilidades do cargo incluem visitas e conferências diretas com o cliente.',
        salary: ['5.500,00', '6.700,00'],
        author: {
          _id: 1,
          name: 'Nubank',
          avatar: 'https://www.nubank.com.br/images/nu-icon.png',
          rating: 4.5,
        },
      },
      {
        _id: 2,
        title: 'Tester',
        description: 'Atuar como tester. Os desafios desse cargo são relacionados a análise e teste de features. É interessante que o candidato possua alguma experiência com o desenvolvimento de aplicativos, pois terá contato direto com a equipe de desenvolvimento',
        salary: ['3.500,00', '4.000,00'],
        author: {
          _id: 1,
          name: 'Nubank',
          avatar: 'https://www.nubank.com.br/images/nu-icon.png',
          rating: 4.5,
        },
      },
      {
        _id: 3,
        title: 'DevOps',
        description: 'A Wine precisa de um DevOps com 3 anos de experiência.',
        salary: '7.500,00',
        author: {
          _id: 1,
          name: 'wine.com.br',
          avatar: 'https://pbs.twimg.com/profile_images/970746311086608384/sgT62YRy_400x400.jpg',
          rating: 5,
        },
      },
    ],
    searchQuery: {
      area: '',
      specialization: '',
    },
    areas: {
      Todos: [''],
      'Desenvolvimento Web': [
        'Desenvolvimento Front End',
        'Desenvolvimento Back End',
        'Desenvolvimento FullStack',
        'Legados',
      ],
      'Desenvolvimento de Software': [
        'Desenvolvimento Front End',
        'Desenvolvimento Back End',
        'Desenvolvimento FullStack',
        'Legados',
      ],
      Infra: ['DevOps', 'Redes'],
      Design: ['Motion Graphics', 'Ilustração', 'Manipulação'],
      Marketing: [''],
    },
  },
  getters: {
    all: state => state.jobs,
    areas: state => state.areas,
  },
  mutations: {
    setJobs(state, payload) {
      if (typeof state.jobs === typeof payload) {
        state.jobs = payload;
      } else {
        throw new Error('Type of payload isn\'t equal to actual data.');
      }
    },
  },
  actions: {
    addJob: ({ commit, state }, payload) => {
      const newState = state.jobs;
      newState.push(payload);
      commit('setJobs', newState);
    },
  },
};

export default Jobs;
