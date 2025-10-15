<template>
  <swiper
    class="shopSlider"
    :modules="modules"
    :allow-touch-move="false"
    :simulate-touch="false"
    :slides-per-view="1"
    :space-between="10"
    :pagination="false"
    :navigation="true"
    :autoplay="false"
    :speed="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <!-- <div @click="test" class="test"></div> -->
    <swiper-slide v-for="item in 8" class="sliderItem">
      <div v-for="value in ShuffledProducts(item)" class="itemBox">
        <ProductCard :product="value" :productAnimation="false"></ProductCard>
      </div>
    </swiper-slide>
    <div class="swiper-dot" :class="{ last: isLast }">
      <div class="scrollDot">
        <div class="dotList" :style="DotListCssVars">
          <div
            class="dot"
            v-for="value in dotList"
            :class="{ active: value === swiperIndex + 1 }"
            @click.prevent="handleDotClick(value - 1)"
          >
            {{ value }}
          </div>
        </div>
      </div>
      <div class="omit">...</div>
      <div
        class="last"
        @click="handleDotClick(!isLast ? dotList[dotList.length - 1] - 1 : 0)"
      >
        {{ !isLast ? dotList[dotList.length - 1] : 1 }}
      </div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { Swiper as SwiperInstance } from "swiper";
import ProductCard from "@/components/ProductCard.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useProductList } from "@/stores/productList";
import type { GridItem } from "@/types/product";

const productList = useProductList();

interface Props {
  id: string;
}

const props = defineProps<Props>();

watch(
  () => props.id,
  () => {
    console.log("点击了导航");
    handleDotClick();
    // swiperIndex.value = 0;
    // swiperInstance.value.slideTo(0);
  }
);

console.log("用户ID:", props.id);
// 使用 sort 方法随机排序
const ShuffledProducts = (i: number) => {
  if (i === 8) {
    return [...productList.productList]
      .sort(() => Math.random() - 0.5)
      .map((item, index, array) =>
        index === array.length - 1 ? { id: -1 } : item
      );
  }
  return [...productList.productList].sort(() => Math.random() - 0.5);
};
const sliderItemList = [];

const test = () => {
  sliderItemList.push(productList.productList);
};
// 定义 Swiper 模块
const modules = [Navigation, Pagination, Autoplay];
// 这个是控制轮播图导航激活的
const swiperIndex = ref(0);
// 轮播图实例
const swiperInstance = ref();

const dotList = [1, 2, 3, 4, 5, 6, 7, 8];
const translateX_px = ref(0);
const translateX_em = ref(0);
const isLast = ref(false);
const DotListCssVars = computed(() => ({
  "--translateX_px": -translateX_px.value + "px",
  "--translateX_em": -translateX_em.value + "em",
}));

// 存储 Swiper 实例（可选，用于控制）
const onSwiper = (swiper: SwiperInstance) => {
  swiperInstance.value = swiper;
  console.log("Swiper initialized:", swiper);
};

// 监听幻灯片切换
let i = 0;
let runOnSlideChange = true;
const onSlideChange = (swiper: SwiperInstance) => {
  // console.log("Slide changed to:", swiper.activeIndex);
  // console.log("i:", i);
  if (runOnSlideChange) {
    if (i > swiper.activeIndex) {
      // console.log("向右切换");
      swiperRight(swiper.activeIndex);
    }
    if (i < swiper.activeIndex) {
      // console.log("向左切换");
      swiperLeft(swiper.activeIndex);
    }
    i = swiper.activeIndex;
  }
  runOnSlideChange = true;
};

// 向左移动
const swiperLeft = (index: number, list: number[] = dotList) => {
  // console.log("向左移动");
  // 向左移动时，判断是否是倒数第四个，如果是就表明到达了右边界，直接交换位置
  if (index === list.length - 4) {
    // console.log("即将到达边界");
    swiperIndex.value = index;
    return;
  }
  if (index === list.length - 3) {
    // console.log("已到达边界");
    isLast.value = true;
    swiperIndex.value = index;
    displacement(index);
    return;
  }
  if (index > list.length - 3) {
    if (isLast.value) {
      // console.log("在边界中");
      swiperIndex.value = index;
      return;
    } else {
      isLast.value = true;
      swiperIndex.value = index;
      displacement(index, 3);
    }
    return;
  }
  displacement(index);
  swiperIndex.value = index;
};
// 向右移动
const swiperRight = (index: number, list: number[] = dotList) => {
  // console.log("向右移动");
  // 向右移动时，判断是否是第一个，如果是第一个就不要再位移了
  if (index === 0) {
    if (isLast.value) {
      isLast.value = false;
      swiperIndex.value = index;
      displacement(1);
      swiperInstance.value.slideTo(index);
      return;
    }
    displacement(1);
    swiperInstance.value.slideTo(index);
    swiperIndex.value = index;
    return;
  }
  if (index === list.length - 3) {
    // console.log("即将到达边界");
    swiperIndex.value = index;
    return;
  }
  if (index === list.length - 4) {
    // console.log("已到达边界");
    isLast.value = false;
    swiperIndex.value = index;
    displacement(index, 2);
    return;
  }
  if (index > list.length - 3) {
    // console.log("在边界中");
    swiperIndex.value = index;
    return;
  }
  swiperIndex.value = index;
  displacement(index);
};

const displacement = (index: number, param: number = 1) => {
  // console.log("移动");
  translateX_px.value = (index - param) * 20;
  translateX_em.value = (index - param) * 0.8;
  // console.log("移动距离：");
  // console.log(translateX_px.value);
  // console.log(translateX_px.value);
};

// 处理指示点点击
const handleDotClick = (index: number = 0) => {
  runOnSlideChange = false;
  // 滚动到页面顶部
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 平滑滚动
  });
  if (swiperIndex.value === index) {
    console.log("退出");
    return;
  }
  // 右移动是index在减小
  if (swiperIndex.value > index) {
    swiperRight(index);
  }
  // 左移动是index在增大
  if (swiperIndex.value < index) {
    swiperLeft(index);
  }
  if (swiperInstance.value) {
    // 切换到对应幻灯片
    swiperInstance.value.slideTo(index);
  }
};
</script>

<style lang="scss" scoped>
.shopSlider {
  .test {
    position: fixed;
    top: 100px;
    width: 100px;
    height: 100px;
    background-color: #449759;
  }
  max-width: 880px;
  padding-top: 50px;
  padding-bottom: 70px;
  :deep(.swiper-button-prev) {
    left: 30%;
  }
  :deep(.swiper-button-next) {
    right: 30%;
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    &.swiper-button-disabled {
      display: none;
    }
    &::after {
      font-size: 22px;
      font-weight: 800;
      cursor: pointer;
    }
    bottom: 0px;
    top: 100%;
    transform: translate(0%, -60%);
    color: #8c8c8c;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 15;
    cursor: pointer;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(229, 227, 218);
    border-image: initial;
    padding: initial;
    border-radius: 50%;
    transition: 0.3s ease-in;
    &:hover {
      background-color: rgb(229, 227, 218);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(116, 100, 47);
      border-image: initial;
    }
  }
  :deep(.swiper-pagination) {
    .swiper-pagination-bullet-active {
      background-color: var(--theme11);
    }
  }
  .sliderItem {
    display: grid;
    gap: 20px;
    justify-items: center;
    grid-template-columns: repeat(
      auto-fit,
      minmax(200px, 1fr)
    ); /* 4 列，每列等宽 */
    .itemBox {
      font-size: 12px;
      width: 200px;
      :deep(.item-price) {
        display: none;
      }
      :deep(.product-style) {
        figcaption {
          margin: 0;
          padding-top: 10px;
        }
        &:hover {
          .add-to-cart {
            bottom: 60px;
          }
        }
        .add-to-cart {
          font-size: 14px;
          padding: 0 10px;
          max-height: 60px;
          bottom: 0px;
        }
      }
    }
  }

  .swiper-dot {
    user-select: none;
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: row;
    column-gap: 0.8em;
    align-items: center;
    &.last {
      flex-direction: row-reverse;
    }
    .scrollDot {
      width: calc(80px + 2.4em);
      overflow: hidden;
      .dotList {
        display: flex;
        column-gap: 0.8em;
        transition: transform 0.5s ease;
        transform: translateX(
          calc(var(--translateX_px) + var(--translateX_em))
        );
        .dot {
          flex-shrink: 0;
        }
      }
    }
    .scrollDot .dotList .dot,
    .omit,
    .last {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: var(--theme01);
      width: 20px;
      height: 40px;
      color: var(--theme03);
      &.active {
        background-color: var(--theme11);
        color: var(--theme01);
      }
    }
    .scrollDot .dotList .dot:hover,
    .last:hover {
      background-color: var(--theme02);
    }
    .scrollDot .dotList .active:hover {
      background-color: var(--theme11);
    }
    .omit {
      cursor: unset;
    }
  }
}
</style>
