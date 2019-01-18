<template>
  <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
    >
      <UserBadge/>
      <v-list>

        <template v-for="(route, index) in menu">
          <v-list-tile v-if="!('children' in route)"
            :key="index"
            :to="{ name: route.route }"
            exact
          >
            <v-list-tile-action>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ route.text }}</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            v-else
            :prepend-icon="route.icon"
            value="true"
            :key="index"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ route.text }}</v-list-tile-title>
            </v-list-tile>

            <template v-for="(child, subindex) in route.children">
                <v-list-tile
                  :key="subindex"
                  exact
                  :to="{ name: child.route }">
                  <v-list-tile-title>{{ child.text }}</v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon>{{ child.icon }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
            </template>
          </v-list-group>

        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import UserBadge from 'Components/UI/Drawer/UserBadge';

export default {
  components: {
    UserBadge,
  },

  data: () => ({
    menu: [
      {
        icon: 'home',
        text: 'Home',
        route: 'Home',
      },
      {
        icon: 'inbox',
        text: 'Mensagens',
        needs: '1',
        children: [
          {
            id: 'inbox',
            text: 'Inbox',
            route: 'CaixaEntradaInbox',
          },
          {
            id: 'spam',
            text: 'Spam',
            route: 'CaixaEntradaSpam',
          },
        ],
      },
    ],
  }),

  computed: {
    drawer: {
      get() {
        return this.$store.getters['UI/Drawer'];
      },
      set(value) {
        this.$store.dispatch('UI/Drawer', value);
      },
    },
  },

  methods: {
    go(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
