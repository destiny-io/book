import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useTheme = defineStore("Theme", () => {
  const theme01 = ref([
    "#f3f2ec", // 这个是body的背景色
    "#e0e0e0", // 这个是顶部导航栏的那两根线的颜色
    "#222", // 这个是首页轮播图的文字颜色（浅色）
    "#777", // 这个是导航栏文字颜色（浅色）
    "#555", // 这个是顶部文字颜色（浅色）
    "#edebe4", // 这个是client-holder的背景颜色（浅色）
    "#efeee8", // 这个是卡片的背景颜色（浅色）
    "#757575", // 这个是quotation的文字颜色（浅色）
    "#eae8df", // 卡片边框的颜色（浅色）
    "#2f2f2f", // 10 这个颜色是每一块区域标题的颜色（刚好和body背景色相反）
    "#74642f", // 11 这个颜色是基础颜色
  ]);
  const Mode = ref(true); // true代表浅色模式，false为深色模式
  // #222 这个是首页轮播图的文字颜色（浅色）
  // #777 这个是导航栏文字颜色（浅色）
  // #555 这个是顶部首页文字颜色（浅色）
  // #edebe4 这个是client-holder的背景颜色（浅色）
  // #efeee8 这个是featured-books卡片的背景颜色（浅色）
  // #edebe4 这个是best-selling的背景颜色（浅色）
  // #757575 这个是quotation的文字颜色（浅色）
  // #333333 卡片边框的颜色（深色）
  const themeCssVars = computed(() =>
    // Object.fromEntries(...)：将这个二维数组转换成一个对象，
    // 其中每个子数组的第一个元素作为属性名，第二个元素作为属性值。
    Object.fromEntries(
      theme01.value
        .slice(0, theme01.value.length)
        .map((value, index) => [
          `--theme${String(index + 1).padStart(2, "0")}`,
          value,
        ])
    )
  );
  const LightMode = () => {
    Mode.value = true;
    changeTheme([
      "#f3f2ec",
      "#e0e0e0",
      "#222",
      "#777",
      "#555",
      "#edebe4",
      "#efeee8",
      "#757575",
      "#eae8df",
      "#2f2f2f",
      "#74642f",
    ]);
  };
  const DarkMode = () => {
    Mode.value = false;
    changeTheme([
      "#2f2f2f",
      "#363636",
      "#E0E0E0",
      "#A8A8A8",
      "#CCCCCC",
      "#2A2A2A",
      "#2d2d2d",
      "#8D8D8D",
      "#333",
      "#f3f2ec",
      "#9c8c57", // 11
    ]);
  };
  const changeTheme = (param: string[]) => {
    for (let index = 0; index < param.length; index++) {
      theme01.value[index] = param[index];
    }
  };
  return {
    theme01,
    themeCssVars,
    Mode,
    changeTheme,
    LightMode,
    DarkMode,
  };
});
