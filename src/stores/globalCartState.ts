// src/stores/globalCartState.ts
import { defineStore } from "pinia";
import { ref } from "vue";
// 定义 Store，id 必须唯一
export const useCartStateStore = defineStore("CartState", () => {
  // 定义状态
  const CartState = ref<boolean>(false);
  const CartList = ref<number[]>([]);
  // 这个是控制购物车二段动画显示的
  const effective = ref<boolean>(false);
  // 第一个数组的值是第一个图片动画的时长,第二个数组的值是第二个图片动画的时长,
  // 即图片开始移动到购物车
  const CartAnimationDuration = ref<string[]>(["0.3s", "0.6s"]);
  const animationSvg = ref<boolean>(false);
  const animationSvgExit = ref<boolean>(false);
  // 定义方法
  const handleAnimationSvg = (a: boolean = false) => {
    animationSvg.value = a;
  };
  const handleAnimationSvgExit = (a: boolean = false) => {
    animationSvgExit.value = a;
  };
  const CartShow = () => {
    CartState.value = true;
  };
  const refreshCart = () => {
    CartState.value = false;
    CartState.value = true;
  };
  const CartHide = () => {
    CartState.value = false;
  };
  const handleEffective = (args: boolean = false) => {
    effective.value = args;
  };

  // 返回状态和方法
  return {
    CartState,
    CartList,
    CartAnimationDuration,
    effective,
    animationSvg,
    animationSvgExit,
    CartShow,
    CartHide,
    refreshCart,
    handleEffective,
    handleAnimationSvg,
    handleAnimationSvgExit,
  };
});
