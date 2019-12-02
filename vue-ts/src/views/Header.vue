<template>
  <TheHeader :isAuthenticated="isAuthenticated" :currentUser="currentUser" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';

@Component({
  components: {
    TheHeader
  }
})
export default class Header extends Vue {
  get isAuthenticated() {
    return this.$store.getters['auth/isAuthenticated'];
  }

  get currentUser() {
    return this.$store.getters['auth/currentUser'];
  }
}
</script>
