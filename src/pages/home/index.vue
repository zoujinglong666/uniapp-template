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

  <up-button
    type="primary"
    text="测试跳转about"
    @click="presenter.handleToAbout"
  />
  <up-button type="primary" text="test" @click="test" />
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/modules/user";
import msg from "@/utils/msg";

import { usePresenter } from "./presenter";

function test() {
  useUserStore().setToken("newToken");
  useUserStore().setUserInfo({
    token: "111111",
    admin: "1111111111",
  });
  msg.success("111111111");
}

const presenter = usePresenter();
const { model } = presenter;
</script>
