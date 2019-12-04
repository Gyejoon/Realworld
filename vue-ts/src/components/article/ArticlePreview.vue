<template>
  <div class="article-preview">
    <ArticleMeta :article="article" />
    <router-link
      exact
      :to="{ name: 'article', params: { slug: article.slug } }"
      class="preview-link"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ArticleMeta from '@/components/article/ArticleMeta.vue';
import { Article } from '@/services/articles';

@Component({
  components: {
    ArticleMeta
  }
})
export default class ArticlePreview extends Vue {
  @Prop() article!: Article;
}
</script>
