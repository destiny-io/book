<template>
  <section id="special-offer" class="bookshelf pb-5 mb-5">
    <div class="section-header align-center">
      <div class="title">
        <span>Grab your opportunity</span>
      </div>
      <h2 class="section-title">优惠书籍</h2>
    </div>

    <div class="container">
      <div class="product-list" data-aos="fade-up" data-aos-offset="-500">
        <ProductCard v-for="item in 4" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
</script>

<style lang="scss" scoped>
#special-offer {
  .section-header {
    // padding-bottom: 100px;
    z-index: 0;
    .title {
      color: black;
    }
  }

  .container {
    .product-list {
      display: grid;
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
  }
}
</style>
