<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">
        No articles are here... yet.
      </div>
      <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ArticlePreview from '@/components/article/ArticlePreview.vue';
import ArticlePagination from '@/components/article/ArticlePagination.vue';
import { Article } from '@/services/articles';

@Component({
  components: {
    ArticlePreview,
    ArticlePagination
  }
})
export default class ArticleList extends Vue {
  @Prop() type!: string;

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
