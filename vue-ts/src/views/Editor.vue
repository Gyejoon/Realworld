<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="제목"
                />
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="게시글에 대한 간략한 소개" />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="마크다운을 사용하여 글을 작성해 보세요."
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="태그" />
                <div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button">
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

export default class Edtior extends Vue {}
</script>
