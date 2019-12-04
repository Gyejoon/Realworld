<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <ArticleMeta :article="article" :actions="true" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <div v-html="parseMarkdown(article.body)"></div>
          <ul class="tag-list">
            <li v-for="(tag, index) of article.tagList" :key="tag + index">
              <span class="tag-item tag-pill tag-default">{{ tag }}</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ArticleMeta from '@/components/article/ArticleMeta.vue';
import VTag from '@/components/VTag.vue';
import marked from 'marked';
import { articleService } from '../services';
import { Article } from '@/services/articles';

@Component({
  components: {
    ArticleMeta,
    VTag
  }
})
export default class ArticleView extends Vue {
  @Prop() slug!: string;

  created() {
    this.$store.dispatch('articles/fetchArticle', this.slug);
  }

  get article(): Article {
    return this.$store.getters['articles/article'];
  }

  beforeDestroy() {
    this.$store.dispatch('articles/resetState');
  }

  parseMarkdown(body: string) {
    return marked(body);
  }
}
</script>

<style lang="scss" scoped>
.tag-list {
  margin-top: 16px;

  .tag-item {
    text-decoration: none;
  }
}
</style>
