import { defineStore } from "pinia";

import type { GridItem } from "@/types/product";
// 存储全局的书籍数据
export const useProductList = defineStore("productList", () => {
  const productList: GridItem[] = [
    {
      id: 1,
      image: "/src/assets/images/tab-item1.jpg",
      txt: "Simple way of piece life", // 介绍
      author: "Armor Ramsey", // 作者
      price: 26, // 价格
      category: "all technology romantic", // 分类
    },
    {
      id: 2,
      image: "/src/assets/images/tab-item2.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 26,
      category: "all fantasy technology romantic",
    },
    {
      id: 3,
      image: "/src/assets/images/tab-item3.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 26,
      category: "all suspense adventure",
    },
    {
      id: 4,
      image: "/src/assets/images/tab-item4.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 26,
      category: "all suspense",
    },
    {
      id: 5,
      image: "/src/assets/images/tab-item5.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 26,
      category: "all adventure romantic",
    },
    {
      id: 6,
      image: "/src/assets/images/tab-item6.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 26,
      category: "all adventure",
    },
    {
      id: 7,
      image: "/src/assets/images/tab-item7.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 10,
      category: "all fantasy technology",
    },
    {
      id: 8,
      image: "/src/assets/images/tab-item8.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 10,
      category: "all fantasy",
    },
  ];

  return {
    productList,
  };
});
