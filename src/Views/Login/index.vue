<template>
  <Layout>
    <transition name="slide-r" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>

<script>
import Layout from 'Layouts/Blank';

export default {
  name: 'HomeView',

  components: {
    Layout,
  },
};
</script>
