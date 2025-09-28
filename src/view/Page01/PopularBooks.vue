<template>
  <section id="popular-books" class="bookshelf py-5 my-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header align-center">
            <div class="title">
              <span>Some quality items</span>
            </div>
            <h2 class="section-title">分类</h2>
          </div>

          <PortfolioGrid :productList="productList" />
        </div>
        <!--inner-tabs-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PortfolioGrid from "@/components/PortfolioGrid.vue";

// 定义网格项的类型
interface GridItem {
  id: number;
  imageUrl: string;
  txt?: string; // 介绍
  author?: string; // 作者
  price?: number;
  category: string; // 分类
}

const productList: GridItem[] = [
  {
    id: 1,
    imageUrl: "src/assets/images/tab-item1.jpg",
    txt: "Simple way of piece life", // 介绍
    author: "Armor Ramsey", // 作者
    price: 26, // 价格
    category: "all technology romantic", // 分类
  },
  {
    id: 2,
    imageUrl: "src/assets/images/tab-item2.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 26,
    category: "all fantasy technology romantic",
  },
  {
    id: 3,
    imageUrl: "src/assets/images/tab-item3.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 26,
    category: "all suspense adventure",
  },
  {
    id: 4,
    imageUrl: "src/assets/images/tab-item4.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 26,
    category: "all suspense",
  },
  {
    id: 5,
    imageUrl: "src/assets/images/tab-item5.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 26,
    category: "all adventure romantic",
  },
  {
    id: 6,
    imageUrl: "src/assets/images/tab-item6.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 26,
    category: "all adventure",
  },
  {
    id: 7,
    imageUrl: "src/assets/images/tab-item7.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 10,
    category: "all fantasy technology",
  },
  {
    id: 8,
    imageUrl: "src/assets/images/tab-item8.jpg",
    author: "Simple way of piece life",
    txt: "Armor Ramsey",
    price: 10,
    category: "all fantasy",
  },
];
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 55px;
}
</style>
