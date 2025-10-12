/// <reference types="vite/client" />
declare module "imagesloaded";
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@/stores/globalCartState";
declare module "@/stores/productList";
declare module "gsap/gsap-core";
declare module "pinia";
