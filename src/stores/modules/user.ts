import { defineStore } from "pinia";
import { ref } from "vue";

import { UserState } from "@/stores/interface";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref<UserState>();
    const token = ref("");
    function setUserInfo(val: UserState["userInfo"]) {
      // @ts-ignore
      userInfo.value = val;
    }
    function setToken(val: string) {
      token.value = val;
    }
    return {
      userInfo,
      setUserInfo,
      setToken,
      token,
    };
  },
  {
    unistorage: {
      key: "user", // 在缓存里面 key 值
      storage: localStorage,
      paths: ["token", "userInfo"], // 需要缓存哪些变量
    },
  },
);
