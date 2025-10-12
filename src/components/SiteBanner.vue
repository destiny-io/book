<template>
  <div class="site-banner">
    <div class="banner-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="colored">
              <h1 class="page-title">{{ props.pageTitle1 }}</h1>
              <div class="breadcum-items">
                <span class="item">
                  <router-link to="/">首页&nbsp;/&nbsp;</router-link>
                </span>
                <span class="item colored">{{ props.pageTitle2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--site-banner-->
</template>

<script setup lang="ts">
const props = defineProps({
  pageTitle1: {
    type: String,
  },
  pageTitle2: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.site-banner {
  text-align: left;
}
.page-title {
  margin-top: 0;
}
</style>
