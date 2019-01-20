<template>
  <v-toolbar color="primary" dark fixed app clipped-left>
    <v-toolbar-side-icon @click.stop="$store.dispatch('UI/Drawer', !$store.getters['UI/Drawer'])"></v-toolbar-side-icon>
    <!-- <v-toolbar-title>{{ $store.getters['App/Name'] }}</v-toolbar-title> -->
    <Logo width="180"/>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>group</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>public</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Logo from 'Components/UI/Logo';

export default {
  components: {
    Logo,
  },
};
</script>
