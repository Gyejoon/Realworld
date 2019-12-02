<template>
  <div id="app">
    <Header />
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/views/Header.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
  components: {
    Header,
    TheFooter
  }
})
export default class App extends Vue {}
</script>
