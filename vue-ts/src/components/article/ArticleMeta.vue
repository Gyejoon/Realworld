<template>
  <div class="article-meta">
    <router-link :to="{ name: 'profile', params: { username: article.author.username } }">
      <img :src="article.author.image" />
    </router-link>
    <div class="info">
      <router-link
        :to="{ name: 'profile', params: { username: article.author.username } }"
        class="author"
        >{{ article.author.name }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <button class="btn btn-outline-primary btn-sm pull-xs-right">
      <i class="ion-heart"></i> {{ article.favoritesCount }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Article } from '@/services/articles';

@Component
export default class ArticleMeta extends Vue {
  @Prop() article!: Article;
}
</script>
