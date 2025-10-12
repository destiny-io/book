<template>
  <div>
    <GlobalCart />
    <HeaderWrap></HeaderWrap>
    <Billboard />
    <ClientHolder />
    <FeaturedBooks />
    <BestSelling />
    <PopularBooks />
    <Quotation />
    <SpecialOffer />
    <Subscribe />
    <LatestBlog />
    <Footer />
    <GoToTop />
  </div>
</template>

<script setup lang="ts">
import HeaderWrap from "@/components/HeaderWrap.vue";
import BestSelling from "./BestSelling.vue";
import Billboard from "./Billboard.vue";
import ClientHolder from "./ClientHolder.vue";
import FeaturedBooks from "./FeaturedBooks.vue";
import LatestBlog from "./LatestBlog.vue";
import PopularBooks from "./PopularBooks.vue";
import Quotation from "./Quotation.vue";
import SpecialOffer from "./SpecialOffer.vue";
import Subscribe from "./Subscribe.vue";
import Footer from "./Footer.vue";
import GlobalCart from "@/components/GlobalCart.vue";
import GoToTop from "@/components/GoToTop.vue";

import { useAos } from "@/stores/aos";
import { onMounted } from "vue";
import Aos from "aos";
onMounted(() => {
  // 初始化 AOS
  if (useAos().aos) {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
    useAos().handleAos();
  } else {
    // console.log("不需要淡入动画");
    Aos.init({ disable: true });
  }
});
</script>

<style scoped></style>
