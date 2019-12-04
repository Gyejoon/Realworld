<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">회원가입</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">이미 계정이 존재합니까?</router-link>
          </p>

          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v[0] }}</li>
          </ul>

          <form @submit.prevent="submit()">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="form.username"
                type="text"
                placeholder="닉네임"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="form.email"
                type="text"
                placeholder="이메일"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="form.password"
                type="password"
                placeholder="패스워드"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RegisterRequest } from '../services/auth';

@Component
export default class Register extends Vue {
  form: RegisterRequest = {
    username: '',
    email: '',
    password: ''
  };

  async submit() {
    await this.$store.dispatch('auth/registerUser', this.form);
    this.$router.push({ name: 'home' });
  }

  get errors() {
    return this.$store.getters['auth/errors'];
  }
}
</script>
