<template>
  <router-link to="" class="tag-pill tag-default">{{ tag }}</router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VTag extends Vue {
  @Prop() tag!: string;
}
</script>
