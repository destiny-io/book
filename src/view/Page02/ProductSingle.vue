<template>
  <div class="ProductSingle">
    <SiteBanner pageTitle1="详情" pageTitle2="particulars"></SiteBanner>

    <section class="bg-sand padding-medium">
      <div class="container">
        <div class="row">
          <div class="col-md-4 product-image">
            <img :src="productImage" />
          </div>

          <div class="col-md-8">
            <div class="product-detail">
              <span>小说</span>
              <h1>Birds Gonna Be Happy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <p><span class="price colored fs-4">$45.00</span></p>

              <div class="product-button">
                <div class="inputBox">
                  <div class="plus" @click.prevent="plus">+</div>
                  <input
                    type="text"
                    id="productNumber"
                    :value="productNumber"
                    class="productNumber"
                  />
                  <div class="sub" @click.prevent="sub">-</div>
                </div>
                <button
                  type="submit"
                  name="add-to-cart"
                  value="27545"
                  class="button m-0"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-tabs mt-5">
      <div class="container">
        <div class="row">
          <div class="tabs-listing">
            <nav>
              <div
                class="nav nav-tabs d-flex justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <button
                  class="nav-link active text-uppercase px-5 py-3"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Description
                </button>
                <button
                  class="nav-link text-uppercase px-5 py-3"
                  id="nav-information-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-information"
                  type="button"
                  role="tab"
                  aria-controls="nav-information"
                  aria-selected="false"
                >
                  Additional information
                </button>
                <button
                  class="nav-link text-uppercase px-5 py-3"
                  id="nav-shipping-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-shipping"
                  type="button"
                  role="tab"
                  aria-controls="nav-shipping"
                  aria-selected="false"
                >
                  Shipping & Return
                </button>
                <button
                  class="nav-link text-uppercase px-5 py-3"
                  id="nav-review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </div>
            </nav>
            <div class="tab-content py-5" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <h5>Product Description</h5>
                <div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat
                  <ul>
                    <li>Donec nec justo eget felis facilisis fermentum.</li>
                    <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                    <li>Aliquam porttitor mauris sit amet orci.</li>
                  </ul>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-information"
                role="tabpanel"
                aria-labelledby="nav-information-tab"
              >
                <h5>It is Comfortable and Best</h5>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-shipping"
                role="tabpanel"
                aria-labelledby="nav-shipping-tab"
              >
                <h5>Returns Policy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eros justo, accumsan non dui sit amet. Phasellus semper
                  volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex
                  non, mattis sollicitudin purus. Mauris consequat justo a enim
                  interdum, in consequat dolor accumsan. Nulla iaculis diam
                  purus, ut vehicula leo efficitur at.
                </p>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  In blandit nunc enim, sit amet pharetra erat aliquet ac.
                </p>
                <h5>Shipping</h5>
                <p>
                  Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui,
                  ultrices ut turpis pulvinar. Sed fringilla ex eget lorem
                  consectetur, consectetur blandit lacus varius. Duis vel
                  scelerisque elit, et vestibulum metus. Integer sit amet
                  tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum
                  arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique
                  dolor eget turpis consequat varius. Quisque a interdum augue.
                  Nam ut nibh mauris.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
              >
                <div class="review-box review-style1 d-flex">
                  <div class="review-item d-flex">
                    <div class="row g-4">
                      <div class="col-md-3">
                        <div class="image-holder">
                          <img
                            src="/src/assets/images/product-item2.jpg"
                            alt="review"
                            class="rounded-circle img-fluid"
                          />
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="review-content">
                          <div
                            class="rating-container text-warning d-flex align-items-center"
                          >
                            <svg width="32" height="32">
                              <use xlink:href="#star-solid"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-solid"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-solid"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-outline"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-outline"></use>
                            </svg>
                          </div>
                          <div class="review-header">
                            <span class="author-name">Tom Johnson</span>
                            <span class="review-date">– 07/05/2022</span>
                          </div>
                          <p>
                            Vitae tortor condimentum lacinia quis vel eros donec
                            ac. Nam at lectus urna duis convallis convallis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="review-item d-flex">
                    <div class="row g-4">
                      <div class="col-md-3">
                        <div class="image-holder">
                          <img
                            src="/src/assets/images/product-item2.jpg"
                            alt="review"
                            class="rounded-circle img-fluid"
                          />
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="review-content">
                          <div
                            class="rating-container text-warning d-flex align-items-center"
                          >
                            <svg width="32" height="32">
                              <use xlink:href="#star-solid"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-solid"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-solid"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-outline"></use>
                            </svg>
                            <svg width="32" height="32">
                              <use xlink:href="#star-outline"></use>
                            </svg>
                          </div>
                          <div class="review-header">
                            <span class="author-name">Jenny Willis</span>
                            <span class="review-date">– 07/05/2022</span>
                          </div>
                          <p>
                            Vitae tortor condimentum lacinia quis vel eros donec
                            ac. Nam at lectus urna duis convallis convallis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="related-products" class="bookshelf pb-5 mb-5">
      <div class="container">
        <div class="section-header align-center">
          <div class="title">
            <span>Related Products</span>
          </div>
          <h2 class="section-title">猜你喜欢</h2>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="inner-content">
            <div class="product-list" data-aos="fade-up">
              <div class="grid product-grid">
                <ProductCard
                  :productAnimation="false"
                  v-for="n in 4"
                  :key="n"
                  :id="n"
                ></ProductCard>
              </div>
              <!--grid-->
            </div>
          </div>
          <!--inner-content-->
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import SiteBanner from "@/components/SiteBanner.vue";
import Footer from "../Page01/Footer.vue";
import { ref } from "vue";
import { useProductList } from "@/stores/productList";
import { useRoute } from "vue-router";
import ProductCard from "@/components/ProductCard.vue";

const route = useRoute();
const productList = useProductList();

const productImage = ref(
  productList.productList[
    +route.params.id === 0 ? 1 : ((+route.params.id - 1) as number)
  ].image
);
console.log(route.params.id);

const productNumber = ref(1);
const plus = () => {
  productNumber.value++;
};

const sub = () => {
  if (productNumber.value < 2) {
    return;
  }
  productNumber.value--;
};

// 这个是书籍的详细页
</script>

<style lang="scss" scoped>
.ProductSingle {
  padding: 50px 100px 0 100px;
  text-align: left;
  .padding-medium {
    padding-top: 1rem;
    .container {
      padding: 0 6rem;
      .product-image {
        padding: 2rem 2rem;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
      .product-detail {
        padding-left: 2rem;
        p {
          margin-bottom: 0;
          padding-bottom: 1.8rem;
        }
        .product-button {
          display: flex;
          gap: 2rem;
          .inputBox {
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 0.8rem;
            width: 8rem;
            height: 3rem;
            margin: 0;
            background-color: #fff;
            color: #111;
            .productNumber {
              text-align: center;
              color: #111;
              border: 0;
              padding: 0;
              box-sizing: border-box;
              width: 100%;
              margin: 0;
            }
            &:hover .plus,
            &:hover .sub {
              display: flex;
            }
            .plus,
            .sub {
              display: none;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 2rem;
              height: 1rem;
              right: 0;
              border: 1px solid var(--theme11);
              color: var(--theme10);
              cursor: pointer;
              &:hover {
                color: var(--theme01);
                background-color: var(--theme11);
              }
            }
            .plus {
              bottom: 50%;
            }
            .sub {
              padding-bottom: 4px;
              top: 50%;
            }
          }
          .button {
            border-radius: 0.8rem;
            width: 8rem;
            height: 3rem;
            padding: 0;
          }
        }
      }
    }
  }
}

.image-holder {
  img {
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: 50% 0;
  }
}

.product-grid {
  width: 100%;
  justify-content: center;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  :deep(.product-item) {
    figcaption h3 {
      font-size: 18px;
    }
    &:hover {
      .add-to-cart {
        bottom: 120px;
      }
    }
    .add-to-cart {
      font-size: 14px;
      padding: 0 10px;
      max-height: 60px;
      bottom: 80px;
    }
  }
}
</style>
