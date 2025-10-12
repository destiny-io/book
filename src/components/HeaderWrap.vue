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
              <div class="switchTheme" @click.prevent="changeTheme">
                <LightMode v-show="useTheme().Mode" />
                <DarkMode v-show="!useTheme().Mode" />
              </div>
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
              <a href="/"><img src="images/main-logo.png" alt="logo" /></a>
            </div>
          </div>

          <div class="col-md-10">
            <nav id="navbar">
              <div class="main-menu" :class="{ mobile: useMobile().mobile }">
                <ul
                  ref="navbar"
                  id="menu-list"
                  :class="{
                    'menu-list': !useMobile().mobile,
                    menuActive: useMobile().mobile,
                  }"
                >
                  <li
                    class="menu-item"
                    v-for="(item, index) in tabList"
                    :class="{ active: useTabList().tabIndex === index }"
                    @click="clickTab(index)"
                  >
                    <router-link id="a-item" :to="item.tab">
                      {{ item.content }}
                    </router-link>
                  </li>
                </ul>

                <div class="hamburger" @click="handleMenu">
                  <div class="bar">
                    <span v-for="value in 3"></span>
                  </div>
                  <div class="menu">MENU</div>
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
import { ref, onMounted, onUnmounted, VueElement, nextTick } from "vue";
import { useTheme } from "@/stores/theme";
import { useTabList } from "@/stores/tabList";
import LightMode from "./svg/LightMode.vue";
import DarkMode from "./svg/DarkMode.vue";
import { useMobile } from "@/stores/mobile";
import { gsap } from "gsap";
gsap.registerPlugin();
const isFixed = ref(false);
const tabList = useTabList().tabList;
// navbar
const navbar = ref<HTMLElement | null>(null);

const clickTab = (index: number) => {
  useTabList().clickTab(index);
};

// 滚动阈值（像素）
const scrollThreshold = 140;

// 监听滚动事件
const handleScroll = () => {
  isFixed.value = window.scrollY >= scrollThreshold;
  // 可选：刷新 AOS 以确保动画正确触发
};
const changeTheme = () => {
  console.log("更换主题");
  if (!useTheme().Mode) {
    useTheme().LightMode();
  } else {
    useTheme().DarkMode();
  }
};

// 点击菜单后，触发的函数
const handleMenu = () => {
  if (useMobile().menu) {
    useMobile().close();
    // 打开菜单
    // 先将元素的高度设置为0，然后动画到自动高度
    gsap.set(navbar.value, { height: "0" }); // 预计算 auto
    gsap.fromTo(
      navbar.value,
      { height: 0 },
      {
        height: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      }
    );
  } else {
    useMobile().open();
    console.log("关闭菜单");
    // 关闭菜单
    gsap.to(navbar.value, {
      height: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }
};

// 组件挂载时添加滚动监听
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // console.log(navbar.value);
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

ul li.active #a-item {
  color: #daa556;
}

#a-item {
  color: var(--theme04);
}

.right-element {
  display: flex;
  justify-content: right;
  padding: 0 20px;
  .switchTheme {
    width: 1.6em;
    cursor: pointer;
    // background-color: #4eb642;
  }
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

#navbar {
  .main-menu {
    .hamburger {
      display: none;
    }
    &.mobile {
      // background-color: aqua;
      display: flex;
      justify-content: flex-end;
      flex-direction: column-reverse;
      ul {
        // display: none;
        height: 0;
        overflow: hidden;
      }
      .hamburger {
        cursor: pointer;
        width: fit-content;
        height: 2em;
        display: flex;
        gap: 6px;
        .bar {
          padding: 6px 0;
          width: 1.6em;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          span {
            width: 100%;
            height: 3px;
            background-color: var(--theme05);
          }
        }
        .menu {
          width: fit-content;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
    width: 100%;
    z-index: 10;
    position: relative;
    line-height: normal;
    ul {
      list-style: none;
    }
    .menu-list {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
      text-align: right;
      li {
        position: relative;
        line-height: normal;
        a {
          padding: 10px 20px;
        }
      }
    }
    .menuActive {
      display: flex;
      flex-direction: column;
      background-color: var(--theme02);
      li {
        padding: 15px;
        width: fit-content;
      }
    }
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

@media (max-width: 768px) {
  #navbar {
    .main-menu {
      &.mobile {
        justify-content: flex-start;
      }
    }
  }
}
</style>
