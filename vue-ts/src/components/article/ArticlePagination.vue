<template>
  <div class="text-xs-center">
    <v-pagination :length="pages.length" v-model="pages" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
  @Prop({ required: true }) pages!: [];
  @Prop({ required: true }) currentPage!: number;
}
</script>
