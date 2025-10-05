<script setup lang="ts">
// 将全局主题切换的变量导入
import { useTheme } from "@/stores/theme";
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
