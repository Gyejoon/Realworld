<template>
  <footer>
    <div class="container">
      <router-link to="/" class="logo-font">conduit</router-link>
      <span class="attribution">
        Vue + Typescript + Vuex + Vue Router author Gyejoong.
      </span>
    </div>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {}
</script>
