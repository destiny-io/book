<template>
  <div :class="{ show: props.isVisible }">
    <svg t="1757490024670" class="icon" viewBox="-300 -300 1624 1624" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1487" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
    <path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-115.2A396.8 396.8 0 1 0 512 115.2a396.8 396.8 0 0 0 0 793.6zM360.704 452.992l96.448 96.384 206.08-206.08a57.6 57.6 0 1 1 81.472 81.408L497.92 671.616a57.6 57.6 0 0 1-81.472 0L279.296 534.4a57.6 57.6 0 1 1 81.408-81.472z" fill="#fff" p-id="1488">
    </path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// 定义组件的 props
interface isVisibleProps {
  isVisible?: boolean;
}
// const isVisible = ref(true)

const props = withDefaults(defineProps<isVisibleProps>(),{
    isVisible:true
  }
);

</script>

<style scoped>
div{
  height: 100%;
  svg{
    width: 100%;
    height: 100%;
    path {
      fill: none;
      stroke: #fff;
      stroke-width: 120;
      stroke-dashoffset: 0;
      stroke-dasharray: 3300;
    }
  }

  &.show{
    /* animation: AddToCartSvg 1s ease-in-out; */
    svg{
      path{
        animation: AddToCartSvg .5s ease-out;
      }
    }
  }

}

@keyframes AddToCartSvg {
  0% {
    stroke-dashoffset:3300;
  }
  100%{
    stroke-dashoffset:0;
  }
}

</style>