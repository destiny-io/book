import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/normalize.css";
import "./assets/css/vendor.css";
import "./assets/icomoon/icomoon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import App from "./App.vue";
import Aos from "aos";

import router from "./router";

const app = createApp(App);
// 创建 Pinia 实例
const pinia = createPinia();
// 初始化 AOS
// 确保 DOM 加载完成
document.addEventListener("DOMContentLoaded", () => {
  Aos.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 120,
  });
});
app.use(pinia);
app.use(router);
app.mount("#app");
