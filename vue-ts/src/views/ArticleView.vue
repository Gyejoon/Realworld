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
          <div v-html="article.body"></div>
          <ul class="tag-list">
            <li v-for="(tag, index) of article.tagList" :key="tag + index">
              <VTag :tag="tag" />
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
  article: any = {};

  async mounted() {
    const { data } = await articleService.getArticle(this.slug);
    this.article = data.article;
  }
}
</script>
