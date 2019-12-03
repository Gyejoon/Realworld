<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" exact active-class="active" to="/">메인</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" active-class="active" to="/aritcle">
            <i class="ion-compose"></i>&nbsp;새 글 작성
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" exact active-class="active" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;내 설정
          </router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" active-class="active" to="/login">로그인</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" active-class="active" to="/register">회원가입</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link
            class="nav-link"
            active-class="active"
            :to="{
              name: 'profile',
              params: { username: currentUser.username }
            }"
          >
            <img :src="currentUser.image" class="user-pic" />
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
