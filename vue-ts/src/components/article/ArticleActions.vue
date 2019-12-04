<template>
  <span v-if="canModify">
    <router-link
      class="btn btn-sm btn-outline-secondary"
      :to="{ name: 'article-editor', params: { slug: article.slug } }"
    >
      <i class="ion-edit"></i> <span>Edit Article</span>
    </router-link>
    <button class="btn btn-outline-danger btn-sm" :disabled="isLoading" @click="deleteArticle">
      <i class="ion-trash-a"></i> <span>Delete Article</span>
    </button>
  </span>
  <span v-else>
    구현중...
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Article } from '@/services/articles';
import { articleService } from '../../services';

@Component
export default class ArticleActions extends Vue {
  @Prop() article!: Article;
  @Prop() canModify!: boolean;
  isLoading: boolean = false;

  async deleteArticle() {
    this.isLoading = true;
    try {
      await articleService.deleteArticle(this.article.slug);
      this.isLoading = false;
      this.$router.push({ name: 'home' });
    } catch (e) {
      alert(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin: 4px;
}
</style>
