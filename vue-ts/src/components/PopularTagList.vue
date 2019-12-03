<template>
  <div class="col-md-3">
    <div class="sidebar">
      <p>인기 있는 태그</p>

      <div class="tag-list">
        <VTag v-for="(tag, index) in tags" :key="index" :tag="tag" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VTag from '@/components/VTag.vue';

@Component({
  components: { VTag }
})
export default class HomePopularTagList extends Vue {
  mounted() {
    this.$store.dispatch('home/fetchTags');
  }

  get tags() {
    return this.$store.getters['home/getTags'];
  }
}
</script>
