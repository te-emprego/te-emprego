<template>
  <v-toolbar color="primary" dark fixed app clipped-left>
    <v-toolbar-side-icon @click.stop="$store.dispatch('UI/Drawer', !$store.getters['UI/Drawer'])"></v-toolbar-side-icon>
    <v-toolbar-title>{{ $store.getters['App/Name'] }}</v-toolbar-title>
  </v-toolbar>
</template>
