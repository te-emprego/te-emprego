<template>
  <v-app id="keep">
    <v-content>
      <transition name="slide-left" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
};
</script>
