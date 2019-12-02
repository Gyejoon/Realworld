<template>
  <router-link to="" class="tag-pill tag-default">{{ tag }}</router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VPagination extends Vue {
  @Prop({ required: true }) pages!: [];
  @Prop({ required: true }) currentPage!: number;
}
</script>
