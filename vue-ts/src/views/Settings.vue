<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">내 설정</h1>

          <form @submit.prevent="updateSettings()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="currentUser.image"
                  placeholder="프로필 사진 URL"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="currentUser.username"
                  placeholder="닉네임"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  v-model="currentUser.bio"
                  rows="8"
                  placeholder="소개글을 작성해 보세요."
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="currentUser.email"
                  placeholder="이메일"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  v-model="currentUser.password"
                  placeholder="새 패스워드"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                내 설정 변경
              </button>
            </fieldset>
          </form>
          <hr />
          <button @click="logout" class="btn btn-outline-danger">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '../services/auth';

@Component
export default class Settings extends Vue {
  async logout() {
    await this.$store.dispatch('auth/logout');
    this.$router.push({ name: 'home' });
  }

  async updateSettings() {
    await this.$store.dispatch('auth/updateUser', this.currentUser);
    this.$router.push({ name: 'home' });
  }

  get currentUser(): User {
    return this.$store.getters['auth/currentUser'];
  }
}
</script>
