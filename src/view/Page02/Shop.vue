<template>
  <div class="shop">
    <SiteBanner pageTitle1="所有书籍" pageTitle2="shop"></SiteBanner>
    <!--site-banner-->
    <div class="content">
      <ul class="category">
        <div class="search">
          <input id="search" type="search" placeholder="搜索..." />
          <i class="icon icon-search"></i>
        </div>
        <li
          v-for="(value, index) in category"
          class="item"
          :class="{ active: index === active }"
          @click="category1(index)"
        >
          <router-link class="item-link" :to="'/Shop/' + value.id">
            {{ value.label }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{ value.value }}</span>
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
      <!-- <ShopSlider></ShopSlider> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/view/Page01/Footer.vue";

import SiteBanner from "@/components/SiteBanner.vue";
import { ref } from "vue";

const active = ref(0);

const category = [
  { value: "230", label: "所有", id: 1 },
  { value: "49", label: "奇幻", id: 2 },
  { value: "40", label: "科技", id: 3 },
  { value: "57", label: "爱情", id: 4 },
  { value: "46", label: "冒险", id: 5 },
  { value: "38", label: "悬疑", id: 6 },
];

const category1 = (index: number) => {
  active.value = index;
};

// 这个是购买书籍的页面
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.page-title {
  margin-top: 0;
}
.shop {
  padding: 50px 100px 0 100px;
  .content {
    display: flex;
    padding-right: 33px;
    padding-left: 33px;
    .category {
      .search {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 3em;
        padding: 10px;
        input {
          cursor: text;
          caret-color: var(--theme03);
          background-color: var(--theme07);
          margin: 0;
          position: relative;
          padding-left: 20px;
          border-radius: 16px;
          width: 100%;
          height: 100%;
          border: 0;
          box-sizing: border-box;
        }
        i {
          cursor: pointer;
          position: absolute;
          left: 80%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      user-select: none;
      padding-top: 22px;
      padding-bottom: 70px;
      width: 10em;
      // height: 100px;
      flex-shrink: 0;
      // background-color: #48a766;
      border-right: 2px solid var(--theme02);
      .item {
        &.active {
          font-size: 18px;
          font-weight: 500;
          color: var(--theme11);
          background-color: var(--theme02);
          .item-link {
            color: var(--theme11);
            // background-color: var(--theme02);
            span {
              color: var(--theme11);
            }
          }
        }
        .item-link {
          display: block;
          width: 100%;
          height: 100%;
          color: var(--theme08);
        }
        border-radius: 4px;
        padding-left: 3rem;
        text-align: left;
        margin: 0;
        cursor: pointer;
        color: var(--theme08);
        background-color: var(--theme01);
        &:hover .item-link {
          color: var(--theme11);
          // background-color: var(--theme02);
          span {
            color: var(--theme11);
          }
        }
        &:hover {
          color: var(--theme11);
          background-color: var(--theme02);
        }
        span {
          color: var(--theme01);
        }
      }
    }
  }
}
</style>
