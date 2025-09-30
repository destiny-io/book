<template>
  <section id="featured-books" class="py-5 my-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header align-center">
            <div class="title">
              <span>Some quality items</span>
            </div>
            <h2 class="section-title">精选书籍</h2>
          </div>

          <div class="product-list" data-aos="fade-up">
            <ProductCard v-for="item in productList" :product="item" />
          </div>
          <!--grid-->
        </div>
        <!--inner-content-->
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="btn-wrap align-right">
            <a href="#" class="btn-accent-arrow"
              >View all products <i class="icon icon-ns-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { useProductList } from "@/stores/productList";
const productList = useProductList().productList;
// productList.map(item=>{
//   return{
//     item
//   }
// })
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  padding: 0 30px;
  column-gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(
    auto-fit,
    minmax(260px, 1fr)
  ); /* 4 列，每列等宽 */
  :deep(.box) {
    width: 80px;
    height: 80px;
  }
}
</style>
