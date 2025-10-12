import { defineStore } from "pinia";
import { ref } from "vue";
// 判断是否是移动端
export const useMobile = defineStore("Mobile", () => {
  const mobile = ref<boolean>(false);
  const menu = ref(false);
  // 当窗口高度大于宽度时自动将mobile改为true
  // 当窗口高度小于宽度时自动将mobile改为false
  const handleMobile = (param: boolean) => {
    mobile.value = param;
  };
  const open = () => {
    menu.value = true;
  };
  const close = () => {
    menu.value = false;
  };

  return {
    mobile,
    menu,
    handleMobile,
    open,
    close,
  };
});
