<template>
  <v-app>
    <Drawer/>
    <Toolbar/>
    <v-content>
      <transition name="slide-r" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
    <!-- <Chat/> -->
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Drawer from 'Components/UI/Drawer';
import Toolbar from 'Components/UI/Toolbar';
import Footer from 'Components/UI/Footer';
// import Chat from 'Components/Chat';

export default {
  name: 'DefaultLayout',

  components: {
    Drawer,
    Toolbar,
    Footer,
    // Chat,
  },

  computed: {
    drawer: {
      get() {
        return this.$store.getters['UI/SIDEBAR'];
      },
      set(value) {
        return this.$store.dispatch('UI/SIDEBAR', value);
      },
    },
    user() {
      const { name, avatar } = this.$store.getters['Usuario/Todos'];
      return { name, avatar };
    },
  },

  data: () => ({
    avatarMenu: [
      {
        text: 'Sair',
        icon: 'logout',
        run: 'logout',
      },
    ],
    moreMenu: [
      {
        text: 'Configurações',
        icon: 'settings',
        run() {
          window.alert('config');
        },
      },
    ],
  }),

  methods: {
    has(item) {
      if (!('needs' in item)) return true;

      const permissions = this.$store.getters['Usuario/Permissoes'];
      const contains = permissions.includes(item.needs);
      return contains;
    },
    isThisRoute() {
      return true;
    },
    logout() {
      this.$router.push({ name: 'LoginIndex' });
    },
    run(functionString) {
      this[functionString]();
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  color: #fff;
  font-size: 25px;
  line-height: 64px;
  padding: 0;
  margin: 0 20px 0 0;
  text-transform: uppercase;
  font-weight: 300;

  span {
    font-weight: 700;
    color: #1890ff;
  }
}

.ant-layout-header {
  display: flex;
}
</style>
