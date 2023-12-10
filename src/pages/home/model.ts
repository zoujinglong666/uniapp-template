import { ref } from "vue";

export const useModel = () => {
  const test = ref("测试pinia缓存");
  return { test };
};

export type Model = ReturnType<typeof useModel>;
