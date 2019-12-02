<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link class="nav-link active" to="/">메인</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/aritcle">
            <i class="ion-compose"></i>&nbsp;새 글 작성
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;내 설정
          </router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/login">로그인</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/register">회원가입</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link
            class="nav-link"
            :to="{
              name: 'profile',
              params: { username: currentUser.username }
            }"
          >
            <img :src="currentUser.image" class="user-pic" :alt="currentUser.username" />
            {{ currentUser.username }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { User } from '../services/auth';

@Component
export default class TheHeader extends Vue {
  @Prop() isAuthenticated!: boolean;
  @Prop() currentUser!: User;
}
</script>
