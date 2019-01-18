<template>
  <div class="custom-breadcrumb">
    <span v-for="(bc, i) in $route.meta.breadcrumb" :key="i">
      <router-link
        class="link"
        v-if="bc.link"
        :to="{ name: bc.link }"
        v-html="bc.name"/>
      <span class="divider" v-if="i < $route.meta.breadcrumb.length - 1">
        <v-icon>chevron_right</v-icon>
      </span>
      <span class="name" v-if="!bc.link" v-html="bc.name"/>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    divider: {
      type: String,
      default: '>',
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-breadcrumb {
  a {
    color: $one;
    text-decoration: none;
  }

  .divider {
    display: inline-block;
    margin: 0 10px;
    font-weight: 900;
    font-size: 1.5em;
  }

  font-size: 1.2em;
  color: #777;
}
</style>
