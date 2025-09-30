export interface GridItem {
  id: number;
  image: string;
  txt?: string; // 介绍
  author?: string; // 作者
  price?: number;
  category: string; // 分类
}
