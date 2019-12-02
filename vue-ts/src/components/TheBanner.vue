<template>
  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>지식을 공유해보세요.</p>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheBanner extends Vue {}
</script>

<style scoped lang="scss">
.banner {
  background-color: cornflowerblue;
}
</style>
