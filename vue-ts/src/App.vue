<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class App extends Vue {}
</script>
