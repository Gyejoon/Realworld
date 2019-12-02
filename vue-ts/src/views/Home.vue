<template>
  <div class="home-page">
    <TheBanner />

    <div class="container page">
      <div class="row">
        <HomeArticlePreview />
        <HomePopularTagList />
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import TheBanner from '@/components/TheBanner.vue';
import HomeArticlePreview from '@/views/home/HomeArticlePreview.vue';
import HomePopularTagList from '@/views/home/HomePopularTagList.vue';

@Component({
  components: {
    TheBanner,
    HomeArticlePreview,
    HomePopularTagList
  }
})
export default class Home extends Vue {}
</script>
