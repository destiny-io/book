<template>
  <section id="best-selling" class="leaf-pattern-overlay">
    <div class="corner-pattern-overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <figure class="products-thumb">
                <img
                  src="images/single-image.jpg"
                  alt="book"
                  class="single-image"
                />
              </figure>
            </div>

            <div class="col-md-6">
              <div class="product-entry">
                <h2 class="section-title divider">畅销书籍</h2>

                <div class="products-content">
                  <div class="author-name">作者：Timbur Hood</div>
                  <h3 class="item-title">Birds gonna be happy</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac.
                  </p>
                  <div class="item-price">$ 45.00</div>
                  <div class="btn-wrap">
                    <a href="#" class="btn-accent-arrow"
                      >立即购买 <i class="icon icon-ns-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / row -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.product-entry {
  text-align: left;
}
</style>
