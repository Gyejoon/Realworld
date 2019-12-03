<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">로그인</h1>
          <p class="text-xs-center">
            <router-link to="/register">계정이 필요 합니까?</router-link>
          </p>

          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v[0] }}</li>
          </ul>

          <form @submit.prevent="submit()">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="이메일"
                v-model="form.email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="패스워드"
                v-model="form.password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { LoginRequest } from '../services/auth';

@Component
export default class Login extends Vue {
  form: LoginRequest = {
    email: '',
    password: ''
  };

  async submit() {
    await this.$store.dispatch('auth/login', this.form);
    this.$router.push({ name: 'home' });
  }

  get errors() {
    return this.$store.getters['auth/errors'];
  }
}
</script>
