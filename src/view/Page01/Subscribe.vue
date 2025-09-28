<template>
  <section id="subscribe">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8" style="width: 76%">
          <div class="row" style="width: 100%">
            <div class="col-md-6">
              <div class="title-element">
                <h2 class="section-title divider">订阅我们的资讯快报</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="subscribe-content"
                data-aos="fade-up"
                data-aos-offset="-100"
              >
                <p>
                  Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
                  amet, consectetur. Elit adipiscing enim pharetra hac.
                </p>
                <form id="form">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email addresss here"
                  />
                  <button class="btn-subscribe">
                    <span>send</span>
                    <i class="icon icon-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#subscribe {
  text-align: left;
}
</style>
