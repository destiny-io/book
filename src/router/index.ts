import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// 定义路由类型
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/view/Page01/Home.vue"),
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: () => import("@/view/Page02/AboutUs.vue"),
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: () => import("@/view/Page02/ContactUs.vue"),
  },
  {
    path: "/Shop",
    name: "shop",
    component: () => import("@/view/Page02/Shop.vue"),
    children: [
      {
        path: ":id",
        name: "ShopSlider",
        component: () => import("@/components/ShopSlider.vue"),
        props: (route) => ({
          id: route.params.id,
          category: route.query.category || "default",
        }),
      },
    ],
  },
  {
    path: "/ProductSingle/:id",
    name: "ProductSingle",
    component: () => import("@/view/Page02/ProductSingle.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/view/NotFound.vue"),
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 使用 HTML5 History 模式
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash === "#billboard") {
      return {
        el: to.hash, // 要滚动到的目标元素
        behavior: "smooth", // 平滑滚动
        top: 200, // 距离顶部的偏移量
      };
    }
    if (to.hash && to.path === from.path) {
      return {
        el: to.hash, // 要滚动到的目标元素
        behavior: "smooth", // 平滑滚动
        top: 80, // 距离顶部的偏移量
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
