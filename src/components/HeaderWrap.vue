<template>
  <div id="header-wrap">
    <div class="top-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="right-element">
              <a href="#" class="user-account for-buy"
                ><i class="icon icon-user"></i><span>&nbsp;我的账户</span></a
              >
              <a href="#" class="cart for-buy"
                ><i class="icon icon-clipboard"></i><span>&nbsp;购物车</span></a
              >
            </div>
            <!--top-right-->
          </div>
        </div>
      </div>
    </div>
    <!--top-content-->
    <!-- 占位元素，用于避免内容跳动 -->
    <div v-if="isFixed" class="header-placeholder"></div>
    <header id="header" :class="{ fixed: isFixed }">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <div class="main-logo">
              <a href="index.html"
                ><img src="images/main-logo.png" alt="logo"
              /></a>
            </div>
          </div>

          <div class="col-md-10">
            <nav id="navbar">
              <div class="main-menu stellarnav">
                <ul class="menu-list">
                  <li
                    class="menu-item"
                    v-for="(item, index) in tabList"
                    :class="{ active: tabIndex === index }"
                    @click="clickTab(index)"
                  >
                    <a :href="'#' + item.tab">{{ item.content }}</a>
                  </li>
                </ul>

                <div class="hamburger">
                  <span class="bar" v-for="value in 3"></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
  <!--header-wrap-->
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const tabIndex = ref(0);
const isFixed = ref(false);
const tabList = [
  { content: "首页", tab: "billboard" },
  { content: "Pages", tab: "pages" },
  { content: "Featured", tab: "featured-books" },
  { content: "Popular", tab: "popular-books" },
  { content: "Offer", tab: "special-offer" },
  { content: "Articles", tab: "latest-blog" },
];

const clickTab = (index: number) => {
  tabIndex.value = index;
};

// 滚动阈值（像素）
const scrollThreshold = 140;

// 监听滚动事件
const handleScroll = () => {
  isFixed.value = window.scrollY >= scrollThreshold;
  // 可选：刷新 AOS 以确保动画正确触发
};

// 组件挂载时添加滚动监听
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// 组件卸载时移除监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
#header.fixed {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 999;
  animation: fixedAnimation 0.3s ease-in;
}

.header-placeholder {
  height: 84px; /* 根据实际导航栏高度调整 */
}

.container-fluid {
  padding: 0 60px;
  .row {
    justify-content: flex-end;
  }
}

@keyframes fixedAnimation {
  0% {
    transform: translateY(-84px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
