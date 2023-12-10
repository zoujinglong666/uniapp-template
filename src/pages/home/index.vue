<template>
  <up-button
    type="primary"
    :text="model.test.value"
    @click="presenter.handleTestPinia"
  />
  <up-button
    type="primary"
    text="测试请求"
    @click="presenter.handleTestMock"
    :customStyle="{
      marginBottom: '10px',
    }"
  />

  <up-button
    type="primary"
    text="测试跳转about"
    @click="presenter.handleToAbout"
  />

  <up-button type="primary" text="pinia" @click="presenter.handleToAbout" />
  <up-button type="primary" text="测试跳转about" @click="test" />
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/modules/user";

import { usePresenter } from "./presenter";

function test() {
  useUserStore().setToken("newToken");
  console.log("1");
}

const presenter = usePresenter();
const { model } = presenter;
</script>
<style lang="scss">
@import url("./index.scss");
</style>
