<!-- src/components/GsapPortfolio.vue -->
<template>
  <!-- 网格过滤 -->
  <div class="portfolio-wrapper">
    <!-- 过滤导航 -->
    <div class="project-list">
      <ul class="nav tabs" id="project-filters">
        <li
          v-for="filter in filters"
          :key="filter.value"
          class="filter"
          :class="{ 'filter-active': filterKey === filter.value }"
          :data-filter="'.' + filter.value"
          @click="applyFilter(filter.value)"
        >
          <span>{{ filter.label }}</span>
        </li>
      </ul>
    </div>

    <!-- 网格容器 -->
    <div class="project-con" ref="gridElement">
      <ProductCard
        v-for="(item, index) in productList"
        :key="item.id"
        class="project-grid-item"
        :class="item.category"
        :data-id="item.id"
        :product="items[index]"
      >
      </ProductCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted, nextTick } from "vue";
import Isotope from "isotope-layout";
import ProductCard from "./ProductCard.vue";
import imagesLoaded from "imagesloaded";

// 定义组件的 props
interface Product {
  id?: number;
  image?: string;
  author?: string; // 介绍
  txt?: string; // 作者
  price?: number;
}

const props = withDefaults(
  defineProps<{
    productList?: GridItem[];
  }>(),
  {
    productList: () => [
      {
        id: 1,
        imageUrl: "src/assets/images/tab-item1.jpg",
        txt: "Simple way of piece life", // 介绍
        author: "Armor Ramsey", // 作者
        price: 26, // 价格
        category: "all technology romantic", // 分类
      },
    ],
  }
);

// 接口定义
interface FilterOption {
  value: string;
  label: string;
}

// 定义网格项的类型
interface GridItem {
  id: number;
  imageUrl: string;
  txt?: string; // 介绍
  author?: string; // 作者
  price?: number;
  category: string; // 分类
}

// 获取 DOM 元素的引用
const gridElement = ref<HTMLElement | null>(null);
// 创建 Isotope 实例的引用
const isotope = ref<Isotope | null>(null);

// 响应式过滤键
const filterKey = ref("all");

const filters: FilterOption[] = [
  { value: "all", label: "所有" },
  { value: "fantasy", label: "奇幻" },
  { value: "technology", label: "科技" },
  { value: "romantic", label: "爱情" },
  { value: "adventure", label: "冒险" },
  { value: "suspense", label: "悬疑" },
];

// 网格项数据（模拟，从 API 加载）
const items: Product[] = props.productList.map(
  ({ id, imageUrl, txt, author, price }) => ({
    id,
    image: imageUrl,
    txt,
    author,
    price,
  })
);

// 在组件挂载后初始化 Isotope
onMounted(async () => {
  // 等待 DOM 更新和 nextTick 确保元素已渲染
  await nextTick();
  if (!gridElement.value) {
    console.error("无法找到网格元素");
    return;
  }
  const imgLoad = imagesLoaded(gridElement.value);
  imgLoad.on("done", () => {
    isotope.value = new Isotope(gridElement.value!, {
      itemSelector: ".project-grid-item",
      layoutMode: "fitRows", // 或其他布局模式，如 'masonry'
      percentPosition: true,
    });
    console.log("Isotope 初始化完成");
  });
});

// 点击导航触发筛选
const applyFilter = (filterValue: string) => {
  filterKey.value = filterValue; // Update filterKey for active class
  if (isotope.value) {
    const isotopeFilter = "." + filterValue;
    isotope.value.arrange({ filter: isotopeFilter });
    console.log(`Applying filter: ${isotopeFilter}`);
  }
};

// 在组件卸载前销毁 Isotope 实例以释放资源
onUnmounted(() => {
  if (isotope.value) {
    isotope.value.destroy();
    isotope.value = null;
  }
});
</script>

<style lang="scss" scoped>
$projectGridItemWidth: 260px;

.portfolio-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  .project-list {
    margin-bottom: 30px;
    .nav {
      display: flex;
      gap: 50px;
      justify-content: center;
      margin-top: 0px;
    }

    .filter {
      &:last-child {
        margin-bottom: 5px;
      }
      padding-bottom: 0.2em;
      font-size: 20px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      font-weight: 500;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        border-bottom: 2px solid #9a884c;
        z-index: 999;
        transition: all 0.4s ease;
        transform-origin: center;
        transform: scaleX(0);
      }
      &:hover::before,
      &-active::before {
        transform: scaleX(1.4);
      }
      &:hover,
      &-active {
        color: #111;
      }
    }
  }

  .project-con {
    :deep(.add-to-cart) {
      padding: 0 20px;
    }
    position: relative;
    margin: 0 auto;
    max-width: calc($projectGridItemWidth * 4 + 160px);
    .project-grid-item {
      width: $projectGridItemWidth;
      height: fit-content;
      margin: 20px 20px 0px 20px;
      overflow: visible;
      position: relative;
    }
  }
}

/* 响应式调整 */
@media (max-width: 1400px) {
  .portfolio-wrapper {
    .project-con {
      max-width: calc($projectGridItemWidth * 3 + 120px);
    }
  }
}
@media (max-width: 1200px) {
  .portfolio-wrapper {
    .project-con {
      max-width: calc($projectGridItemWidth * 2 + 80px);
    }
  }
}
@media (max-width: 1000px) {
  .portfolio-wrapper {
    .project-con {
      max-width: calc($projectGridItemWidth + 20px);
    }
  }
}
</style>
