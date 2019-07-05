export default {
  namespaced: true,
  state: {
    id: 12,
    name: 'Daniel Bonifacio',
    permissions: ['1', '3'],
    avatar: 'https://gravatar.com/avatar/1419a379c561c42cbdd9e82d064363a6',
    details: {
      email: 'danielbonifacio@outlook.com',
      documents: {
        cpf: '11541839714',
        cnpj: null,
        rg: '1397642',
      },
    },
  },
  getters: {
    All(state) {
      const { id, name, permissions, avatar, details } = state;
      return ({
        id,
        name,
        permissions,
        avatar,
        details,
        status: 'online',
      });
    },
    Name({ name }) {
      return name;
    },
    Permissions({ permissions }) {
      return permissions;
    },
    Avatar({ avatar }) {
      return avatar;
    },
    Email({ details }) {
      return details.email;
    },
  },
  mutations: {},
  actions: {},
};
