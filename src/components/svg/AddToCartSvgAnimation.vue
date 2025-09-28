<template>
  <div ref="innerElement" class="box" :style="{ '--primary': props.theme }">
    <svg
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1487"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <circle class="circle01" cx="512" cy="512" r="442" />
      <circle class="circle02" cx="50%" cy="50%" r="412" fill="none" />
      <path
        fill="#fff"
        d="M483.84768 867.808C466.37568 885.792 441.73568 896 415.87968 896 390.05568 896 365.41568 885.792 347.94368 867.808L27.46368 547.552C-9.17632 508.864-9.17632 450.336 27.46368 411.648 44.26368 394.944 67.30368 385.088 91.68768 384.256 118.72768 383.008 144.93568 393.024 163.46368 411.648L415.87968 664 860.61568 219.552C878.31168 201.952 902.88768 192 928.58368 192 954.24768 192 978.82368 201.952 996.51968 219.552 1033.15968 258.208 1033.15968 316.704 996.51968 355.36L483.84768 867.808Z"
        p-id="6239"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 定义组件的 props
interface isVisibleProps {
  theme?: string;
}
// const isVisible = ref(true)

// 子组件内部的 DOM 元素引用
const innerElement = ref(null);

// 暴露给父组件
defineExpose({
  innerElement,
});

const props = withDefaults(defineProps<isVisibleProps>(), {
  theme: "#000",
});
</script>

<style lang="scss" scoped>
$primary: #051b12;
$animationDuration: 1s; // 动画时长
$animationDelay: $animationDuration * 0.7; // 动画延迟
$pathAnimationDuration: $animationDuration * 0.4; // 动画时长
$circle01AnimationDuration: $animationDuration * 0.4; // 动画时长
$circle02AnimationDuration: $animationDuration; // 动画时长
$circle03AnimationDuration: $animationDuration * 0.4; // 动画时长
$circle02StrokeWidth: 220; // circle02圆开始转动时描边的宽度
:root {
  --primary: #000;
}

.box {
  // border: 2px solid $primary;
  // margin: 0 auto;
  max-width: 30%;
  max-height: 100%;
  svg {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    path {
      fill: #fff;
      opacity: 0;
      transform-origin: center;
      transform: scale(0.4);
      // 这个动画是“正确”图标开始显示并旋转到0度
      // animation: pathAnimation .8s ease-out $animationDelay forwards;
      animation: pathAnimation $pathAnimationDuration ease-out $animationDelay
        forwards;
    }

    .circle01 {
      fill: var(--primary);
      // fill: #be5959;
      opacity: 0;
      // stroke-dashoffset: 2590;
      // stroke-dasharray: 2590;
      transform: scale(0.8);
      transform-origin: center;
      // animation: circle01Animation 5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      // 这个动画是填充圈开始显示缩小
      animation: circle01Animation $circle01AnimationDuration ease-out forwards
        $animationDelay;
    }

    // 描边动画
    .circle02 {
      stroke: #fff;
      stroke-width: 60;
      stroke-linecap: round;
      opacity: 1;
      // stroke-dashoffset: 2590;
      // stroke-dasharray: 2590;
      transform-origin: center;
      transform: rotate(270deg) scale(0.8);
      // 第一个动画是边线开始变长，转圈
      // 第二个动画是外边线开始收缩
      animation: circle02Animation $circle02AnimationDuration
          cubic-bezier(0.99, 0.07, 0.64, 0.98),
        circle03Animation $circle03AnimationDuration ease-out $animationDelay
          forwards;
    }
  }
}

@keyframes circle01Animation {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(0.8);
  }
}

@keyframes circle02Animation {
  0% {
    stroke-width: $circle02StrokeWidth;
    stroke-dashoffset: 2590;
    stroke-dasharray: 0 2590;
    transform: rotate(270deg) scale(0.5);
  }

  70% {
    stroke-width: 60;
    stroke-dashoffset: 777;
    stroke-dasharray: 2590 0;
    transform: rotate(270deg) scale(1);
  }

  100% {
    stroke-width: 60;
    stroke-dashoffset: 0;
    stroke-dasharray: 2590 0;
    transform: rotate(270deg) scale(1);
  }
}

// 这个动画是外边线开始收缩
@keyframes circle03Animation {
  0% {
    stroke-width: 60;
    // opacity: 1;
    transform: rotate(270deg) scale(1);
  }
  30% {
    // stroke-width: $circle02StrokeWidth;
    // opacity: 1;
  }
  100% {
    stroke-width: 60;
    // opacity: 1;
    // stroke: #fff;
    transform: rotate(270deg) scale(0.8);
  }
}

@keyframes pathAnimation {
  0% {
    opacity: 0;
    transform: scale(0.4) rotate(-45deg);
  }
  100% {
    opacity: 1;
    transform: scale(0.4) rotate(0deg);
  }
}
</style>
