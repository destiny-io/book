<template>
  <section id="latest-blog" class="py-5 my-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header align-center">
            <div class="title">
              <span>Read our articles</span>
            </div>
            <h2 class="section-title">我们的博客</h2>
          </div>

          <div class="row">
            <div class="col-md-4" v-for="item in 3">
              <article class="column" data-aos="fade-up" data-aos-offset="-200">
                <figure>
                  <a href="#" class="image-hvr-effect">
                    <img
                      src="images/post-img1.jpg"
                      alt="post"
                      class="post-image"
                    />
                  </a>
                </figure>

                <div class="post-item">
                  <div class="meta-date">Mar 30, 2021</div>
                  <h3>
                    <a href="#">Reading books always makes the moments happy</a>
                  </h3>

                  <div class="links-element">
                    <div class="categories">inspiration</div>
                  </div>
                  <!--links-element-->
                </div>
              </article>
            </div>
          </div>

          <div class="row">
            <div class="btn-wrap align-center">
              <a
                href="#"
                class="btn btn-outline-accent btn-accent-arrow"
                tabindex="0"
                >Read All Articles<i class="icon icon-ns-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#latest-blog {
  text-align: left;
}
</style>
