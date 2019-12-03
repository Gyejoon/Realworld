<template>
  <div class="home-page">
    <TheBanner />

    <div class="container page">
      <div class="row">
        <HomeGlobalFeed />
        <PopularTagList />
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import TheBanner from '@/components/TheBanner.vue';
import HomeGlobalFeed from '@/views/home/HomeGlobalFeed.vue';
import PopularTagList from '@/components/PopularTagList.vue';

@Component({
  components: {
    TheBanner,
    HomeGlobalFeed,
    PopularTagList
  }
})
export default class Home extends Vue {}
</script>
