<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">
        No articles are here... yet.
      </div>
      <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
      <div class="text-xs-center">
        <v-pagination color="#1e88e5" :length="pageCount" v-model="currentPage" :total-visible="10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import ArticlePreview from '@/components/article/ArticlePreview.vue';
import { Article, ArticleQueryParam } from '@/services/articles';
import articles from '../../store/articles';

@Component({
  components: {
    ArticlePreview
  }
})
export default class ArticleList extends Vue {
  @Prop() type!: string;
  currentPage = 1;
  itemsPerPage = 5;

  get listQueryParam(): ArticleQueryParam {
    const filters: ArticleQueryParam = {
      offset: (this.currentPage - 1) * this.itemsPerPage,
      limit: this.itemsPerPage
    };

    return filters;
  }

  fetchArticles() {
    this.$store.dispatch('home/fetchArticles', this.listQueryParam);
  }

  mounted() {
    this.fetchArticles();
  }

  @Watch('currentPage')
  currentPageChange() {
    this.fetchArticles();
  }

  get articles(): Article[] {
    return this.$store.getters['home/getArticles'];
  }

  get pageCount() {
    const articlesCount = this.$store.getters['home/articlesCount'];
    return articlesCount / this.itemsPerPage;
  }

  get isLoading(): boolean {
    return this.$store.getters['home/isLoading'];
  }
}
</script>
