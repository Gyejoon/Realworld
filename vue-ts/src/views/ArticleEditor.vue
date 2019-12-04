<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="submit()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="form.title"
                  class="form-control form-control-lg"
                  placeholder="제목"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="form.description"
                  class="form-control"
                  placeholder="게시글에 대한 간략한 소개"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="form.body"
                  placeholder="마크다운을 사용하여 글을 작성해 보세요."
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="tagInput"
                  @keypress.enter.prevent="addTag(tagInput)"
                  class="form-control"
                  placeholder="태그"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) in form.tagList"
                    :key="index"
                  >
                    <i class="ion-close-round" @click="removeTag(tag)"> </i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="submit"
                :disabled="isLoading"
              >
                글 게시하기
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Article, CreateArticleRequest } from '../services/articles';
import { articleService } from '../services';

@Component
export default class ArticleEdtior extends Vue {
  form: CreateArticleRequest = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };
  tagInput: string = '';
  isLoading: boolean = false;

  async submit() {
    this.isLoading = true;
    try {
      await articleService.createArticle(this.form);
      this.isLoading = false;
      this.$router.push({ name: 'home' });
    } catch (e) {
      alert(e);
      this.isLoading = false;
    }
  }

  addTag(tag: string) {
    this.form.tagList!.push(tag);
    this.tagInput = '';
  }

  removeTag(tag: string) {
    this.form.tagList!.filter(t => t === tag);
  }
}
</script>
