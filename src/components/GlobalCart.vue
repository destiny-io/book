<template>
  <div :style="cssVars" class="iconBox" v-show="CartState.CartState">
    <svg
      t="1758261520662"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4722"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :class="{
        animationSvgExit: CartState.animationSvgExit,
      }"
    >
      <path
        d="M94.0243475 136.0556525c18.11478281 0 33.68347781 12.8556525 37.02260906 30.67826063l94.95652125 502.41391312a116.86956563 116.86956563 0 0 0 114.82434844 95.16521719h425.98956469a116.86956563 116.86956563 0 0 0 113.98956562-91.15826063l71.20695657-315.67304344a116.86956563 116.86956563 0 0 0-113.98956563-142.58086968H339.07478281a33.39130406 33.39130406 0 1 0 0 66.78260812h498.94956469a50.08695656 50.08695656 0 0 1 48.83478281 61.10608781l-71.20695656 315.67304344a50.08695656 50.08695656 0 0 1-48.83478281 39.06782531H340.82782625a50.08695656 50.08695656 0 0 1-49.21043531-40.77913031L196.66086969 154.2956525A104.47304344 104.47304344 0 0 0 94.0243475 69.27304344a33.39130406 33.39130406 0 0 0 0 66.78260906z"
        p-id="4723"
        :class="{ animationSvg: CartState.animationSvg }"
      ></path>
      <path
        d="M382.0243475 924.63304344m-65.44695656 0a65.44695656 65.44695656 0 1 0 130.89391312 0 65.44695656 65.44695656 0 1 0-130.89391312 0Z"
        p-id="4724"
      ></path>
      <path
        d="M687.51304344 924.63304344m-65.44695656 0a65.44695656 65.44695656 0 1 0 130.89391312 0 65.44695656 65.44695656 0 1 0-130.89391313 0Z"
        p-id="4725"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useCartStateStore } from "@/stores/globalCartState";
import { watch, computed } from "vue";
import { debounce } from "../js/utility/debounce";
const CartState = useCartStateStore();
// 这个是控制购物车第二个动画的

// 弹跳动画的时间
const animationSvgDuration = "0.3s";

// 前两个动画花费的时间
const AnimationImgDuration =
  +CartState.CartAnimationDuration[0].split("s")[0] +
  +CartState.CartAnimationDuration[1].split("s")[0];

const cssVars = computed(() => ({
  "--AnimationImgDuration": AnimationImgDuration + "s",
  "--animationSvgDuration": animationSvgDuration,
}));
// 前两个动画结束后，图片移动到购物车，显示弹跳动画
const showCartAnimation = debounce(() => {
  CartState.handleAnimationSvg(true);
}, AnimationImgDuration * 1000);
// 前两个动画和弹跳动画结束后等0.5秒就开始退场动画

const handleEffectiveDelay =
  (AnimationImgDuration + +animationSvgDuration.split("s")[0] + 0.5) * 1000;
// console.log("handleEffectiveDelay:" + handleEffectiveDelay);

const handleEffective = debounce(() => {
  CartState.handleEffective(true);
  CartState.handleAnimationSvgExit(true);
}, handleEffectiveDelay);

// 清理
const clean = debounce(() => {
  CartState.handleEffective(false);
  CartState.handleAnimationSvgExit();
  CartState.handleAnimationSvg();
  CartState.CartHide();
}, handleEffectiveDelay + 550);

watch(
  () => CartState.CartList,
  (newValue) => {
    console.log("CartListNewValue:" + newValue);

    if (newValue.length != 0) {
      // 现在购物车是激活状态
      // 确保path的动画不会触发
      CartState.handleAnimationSvg();
      CartState.handleAnimationSvgExit();
      showCartAnimation();
      handleEffective();
      clean();
    }
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
// 更改这个属性还需要改productCard的moverX和moverY
// 100px对应moverX：window.innerWidth - rect02list[0] - 80;moverY.value = 200 - rect02list[1];
$iconBoxWidth: 100px;

.iconBox {
  position: fixed;
  right: 0;
  top: 200px;
  z-index: 999;
  width: $iconBoxWidth;
  height: calc($iconBoxWidth * 0.5);
  background-color: transparent;
  text-align: left;
  overflow: hidden;
  svg {
    fill: #74642f;
    width: 50%;
    animation: svgAnimation01 var(--AnimationImgDuration) linear forwards;
    // 弹跳动画
    .animationSvg {
      animation: svgAnimation03 var(--animationSvgDuration) linear 0.2s;
    }
    &.animationSvgExit {
      animation: svgAnimation02 0.5s linear forwards;
    }
  }
}

// 这个动画是让购物车入场
@keyframes svgAnimation01 {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

// 这个动画是让购物车退场
@keyframes svgAnimation02 {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(0px) rotate(-25deg);
  }
  70% {
    transform: translateX(50px) rotate(0deg);
  }
  100% {
    transform: translateX($iconBoxWidth) rotate(0deg);
  }
}

// 这个动画是让购物车弹跳一下
@keyframes svgAnimation03 {
  0% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
  50% {
    transform-origin: bottom;
    transform: scaleY(0.8);
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
}
</style>
