<template>
  <router-link
    to="#billboard"
    class="ToTop"
    @click="handleScroll"
    :class="{ active: Active, exit: Exit }"
    v-show="show"
  >
    <svg
      t="1759563229410"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4841"
    >
      <path
        d="M516.544 397.248a31.904 31.904 0 0 0-22.624 9.376L86.624 813.92a32 32 0 1 0 45.248 45.248l384.672-384.64 384.672 384.64a32 32 0 0 0 45.248-45.248L539.2 406.624a31.904 31.904 0 0 0-22.624-9.376zM96 192h832a32 32 0 0 1 0 64H96a32 32 0 1 1 0-64z"
        p-id="4842"
      ></path>
    </svg>
  </router-link>
</template>

<script setup lang="ts">
import { debounce } from "@/js/utility/debounce";
import { onMounted, onUnmounted, ref } from "vue";
import { useTabList } from "@/stores/tabList";

const Active = ref(false);
const Exit = ref(false);
const show = ref(false);

const handleScroll = () => {
  Exit.value = true;
  useTabList().clickTab(0);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const showToTop = debounce(() => {
  if (Active.value) {
    show.value = true;
  }
  if (Exit.value) {
    show.value = false;
    Exit.value = false;
  }
}, 500);
const winScroll = debounce(() => {
  if (window.scrollY > 400) {
    Active.value = true;
    Exit.value = false;
    showToTop();
  }
  if (window.scrollY < 400 && Active.value) {
    Exit.value = true;
    Active.value = false;
    showToTop();
  }
  // console.log(window.scrollY);
}, 300);
onMounted(() => {
  window.addEventListener("scroll", winScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", winScroll);
});
</script>

<style lang="scss" scoped>
.ToTop {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--theme11);
  position: fixed;
  bottom: 50px;
  right: 40px;
  z-index: 999;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &.active {
    animation: entrance 1s ease;
    opacity: 1;
  }
  &.exit {
    animation: exit 0.5s ease forwards;
  }
  .icon {
    fill: var(--theme10);
    width: 100%;
    height: 100%;
  }
}
@keyframes exit {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-400px);
  }
}
@keyframes entrance {
  0% {
    opacity: 0;
    transform: translateY(-400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
