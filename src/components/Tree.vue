<template>
  <div class="">
    <vue-tree-navigation :items="items" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
  export default {
    data() {
      return {
        items: [
          { name: 'Github', external: 'https://github.com' },
          { name: 'Github', external: 'https://github.com' },
          { name: 'Github', external: 'https://github.com' },
          { name: 'Github', external: 'https://github.com' },
          { name: 'Github', external: 'https://github.com' },
          { name: 'Github', external: 'https://github.com' },
        ],
      };
    },
  };
</script>
