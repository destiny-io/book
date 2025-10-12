<script setup lang="ts">
// 将全局主题切换的变量导入
import { useTheme } from "@/stores/theme";
import { useMobile } from "@/stores/mobile";
import { onMounted, onUnmounted } from "vue";
import { debounce } from "./js/utility/debounce";
const handleMobile = debounce(() => {
  if (768 > window.innerWidth) {
    console.log("移动端");
    useMobile().handleMobile(true);
  } else {
    console.log("pc端");
    useMobile().handleMobile(false);
  }
}, 200);
onMounted(() => {
  if (768 > window.innerWidth) {
    useMobile().handleMobile(true);
  }
  window.addEventListener("resize", handleMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleMobile);
});
</script>

<template>
  <router-view class="home" :style="useTheme().themeCssVars" />
</template>

<style lang="scss" scoped>
.home {
  color: var(--theme08);
  background-color: var(--theme01);
  transition: background-color 0.4s ease;
}
</style>
