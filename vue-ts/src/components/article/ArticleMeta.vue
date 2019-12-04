<template>
  <div class="article-meta">
    <router-link :to="{ name: 'profile', params: { username: article.author.username } }">
      <img :src="article.author.image" />
    </router-link>
    <div class="info">
      <router-link
        :to="{ name: 'profile', params: { username: article.author.username } }"
        class="author"
        >{{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <ArticleActions v-if="actions" :article="article" :canModify="isCurrentUser()" />
    <button class="btn btn-outline-primary btn-sm pull-xs-right">
      <i class="ion-heart"></i> {{ article.favoritesCount }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ArticleActions from '@/components/article/ArticleActions.vue';
import { Article } from '@/services/articles';

@Component({
  components: {
    ArticleActions
  }
})
export default class ArticleMeta extends Vue {
  @Prop({ required: true }) article!: Article;
  @Prop() actions!: boolean;

  isCurrentUser() {
    if (this.currentUser.username && this.article.author.username) {
      return this.currentUser.username === this.article.author.username;
    }

    return false;
  }

  get currentUser() {
    return this.$store.getters['auth/currentUser'];
  }
}
</script>
