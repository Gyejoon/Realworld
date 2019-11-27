<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link class="nav-link disabled" to="">Your Feed</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="">Global Feed</router-link>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <router-link to="profile.html"
                ><img src="http://i.imgur.com/Qr71crq.jpg"
              /></router-link>
              <div class="info">
                <router-link to="" class="author">Eric Simons</router-link>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <router-link to="" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </router-link>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <router-link to="profile.html"
                ><img src="http://i.imgur.com/N4VcUeJ.jpg"
              /></router-link>
              <div class="info">
                <router-link to="" class="author">Albert Pai</router-link>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <router-link to="" class="preview-link">
              <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </router-link>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <router-link to="" class="tag-pill tag-default">programming</router-link>
              <router-link to="" class="tag-pill tag-default">javascript</router-link>
              <router-link to="" class="tag-pill tag-default">emberjs</router-link>
              <router-link to="" class="tag-pill tag-default">angularjs</router-link>
              <router-link to="" class="tag-pill tag-default">react</router-link>
              <router-link to="" class="tag-pill tag-default">mean</router-link>
              <router-link to="" class="tag-pill tag-default">node</router-link>
              <router-link to="" class="tag-pill tag-default">rails</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Home extends Vue {}
</script>
