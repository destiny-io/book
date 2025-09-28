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
</script>

<style scoped></style>
