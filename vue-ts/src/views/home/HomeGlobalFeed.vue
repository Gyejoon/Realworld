<template>
  <div class="col-md-9">
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <li class="nav-item">
          <router-link class="nav-link disabled" to="">내가 작성한 글</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="">전체 글</router-link>
        </li>
      </ul>
    </div>
    <ArticleList type="all" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArticleList from '@/components/article/ArticleList.vue';

@Component({
  components: {
    ArticleList
  }
})
export default class HomeGlobalFeed extends Vue {}
</script>
