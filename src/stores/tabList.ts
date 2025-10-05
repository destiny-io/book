import { defineStore } from "pinia";
import { ref } from "vue";
// 存储全局的导航数据
export const useTabList = defineStore("tabList", () => {
  const tabIndex = ref<number>(0);
  const tabList = [
    { content: "首页", tab: "#billboard" },
    { content: "精选", tab: "#featured-books" },
    { content: "分类", tab: "#popular-books" },
    { content: "优惠", tab: "#special-offer" },
    { content: "blog", tab: "#latest-blog" },
    { content: "关于我们", tab: "aboutUs" },
  ];
  const clickTab = (index: number) => {
    tabIndex.value = index;
  };
  return {
    tabIndex,
    tabList,
    clickTab,
  };
});
