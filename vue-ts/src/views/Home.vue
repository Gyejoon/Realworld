<template>
  <div class="home-page">
    <TheBanner />

    <div class="container page">
      <div class="row">
        <HomeGlobalFeed />
        <HomePopularTagList />
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import TheBanner from '@/components/TheBanner.vue';
import HomeGlobalFeed from '@/views/home/HomeGlobalFeed.vue';
import HomePopularTagList from '@/views/home/HomePopularTagList.vue';

@Component({
  components: {
    TheBanner,
    HomeGlobalFeed,
    HomePopularTagList
  }
})
export default class Home extends Vue {}
</script>
