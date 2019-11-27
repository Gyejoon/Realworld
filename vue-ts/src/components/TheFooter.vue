<template>
  <footer>
    <div class="container">
      <router-link to="/" class="logo-font">conduit</router-link>
      <span class="attribution">
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
        &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {}
</script>
