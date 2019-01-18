<template>
  <div>
    <transition :name="'slide-r'" mode="out-in">
      <router-view v-if="loggedIn"/>
      <AuthScreen v-else/>
    </transition>
  </div>
</template>

<script>
import AuthScreen from 'Components/Authentication';

export default {
  name: 'App',

  components: {
    AuthScreen,
  },

  mounted() {
    this.$store.dispatch('Auth/VERIFY_TOKEN')
      .then(() => {
        this.loggedIn = true;
      })
      .catch(() => {
        console.log('Erro ao logar');
      });
  },

  data: () => ({
    transitionName: 'slide-left',
    loggedIn: false,
  }),

  /* eslint-disable */
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-r' : 'slide-left';
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');

#app {
  height: 100%;
  overflow-x: hidden;
}

#default-layout {
  height: 100%;
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .5s;
}
.slide-left-enter, .slide-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-20%);
}
.slide-r-enter-active, .slide-r-leave-active {
  transition: all .5s;
}
.slide-r-enter, .slide-r-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(20%);
}
</style>
