<template>
  <div>{{ model.test.value }}</div>
</template>
<script lang="ts" setup>
import { useRoute } from "uniapp-router-next";

import { usePresenter } from "./presenter";

const presenter = usePresenter();
const { model } = presenter;
const route = useRoute();
console.log(route.query.name);
</script>
<style lang="scss" scoped></style>
