import { defineStore } from "pinia";
import { ref } from "vue";
// 存储全局的导航数据
export const useAos = defineStore("Aos", () => {
  const aos = ref<boolean>(true);
  const handleAos = () => {
    aos.value = false;
  };
  return {
    aos,
    handleAos,
  };
});
