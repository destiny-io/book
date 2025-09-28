/// <reference types="vite/client" />
declare module "imagesloaded";
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  return component;
}
declare module "@/stores/globalCartState";
