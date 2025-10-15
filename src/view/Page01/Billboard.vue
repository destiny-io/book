<template>
  <!-- 首页轮播图 -->
  <section id="billboard">
    <swiper
      class="MainSlider"
      :modules="modules"
      :loop="true"
      :slides-per-view="1"
      :space-between="10"
      :pagination="false"
      :navigation="true"
      :autoplay="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in 3" class="sliderItem">
        <div class="banner-content">
          <h2 class="banner-title">Life of the Wild</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.
          </p>
          <div class="btn-wrap">
            <a href="#" class="btn btn-outline-accent btn-accent-arrow"
              >Read More<i class="icon icon-ns-arrow-right"></i
            ></a>
          </div>
        </div>
        <img src="images/main-banner1.jpg" alt="banner" class="banner-image" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import type { Swiper as SwiperInstance } from "swiper";

// 定义 Swiper 模块
const modules = [Navigation, Pagination, Autoplay];

// 存储 Swiper 实例（可选，用于控制）
const onSwiper = (swiper: SwiperInstance) => {
  //  console.log('Swiper initialized:', swiper)
};

// 监听幻灯片切换
const onSlideChange = (swiper: SwiperInstance) => {
  //  console.log('Slide changed to:', swiper.activeIndex)
};
</script>

<style lang="scss" scoped>
// @import url("@/assets/icomoon/icomoon.css");

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #8c8c8c;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  z-index: 5;
  cursor: pointer;
  background: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(229, 227, 218);
  border-image: initial;
  padding: initial;
  border-radius: 50%;
  transition: 0.3s ease-in;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: rgb(229, 227, 218);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(116, 100, 47);
  border-image: initial;
}

:deep(.swiper-button-next) {
  right: 0px;
}

:deep(.swiper-button-prev) {
  left: 0px;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 22px;
  font-weight: 800;
}

#billboard {
  width: 100%;
  padding: 0 140px;
}

.MainSlider {
  user-select: none;
  padding: 6em 0;
  font-size: 16px;
}
.sliderItem {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  .banner-content {
    width: 35%;
    margin-top: 60px;
    margin-right: 175px;
  }
}

@media (max-width: 1000px) {
  #billboard {
    padding: 0 10px;
  }
  .sliderItem {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    .banner-image {
      flex: 1;
    }
    .banner-content {
      flex: 1;
      width: 100%;
      text-align: center;
      margin: 0 auto !important;
    }
  }
}
</style>
