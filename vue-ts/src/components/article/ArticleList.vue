<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ArticlePreview from '@/components/article/ArticlePreview.vue';
import { Article } from '@/services/articles';

@Component({
  components: {
    ArticlePreview
  }
})
export default class ArticleList extends Vue {
  mounted() {
    this.$store.dispatch('home/fetchArticles');
  }

  get articles(): Article[] {
    return this.$store.getters['home/getArticles'];
  }

  get isLoading(): boolean {
    return this.$store.getters['home/isLoading'];
  }
}
</script>
