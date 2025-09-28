<template>
  <section id="quotation" class="align-center pb-5 mb-5">
    <div class="inner-content">
      <h2 class="section-title divider">每日名言</h2>
      <blockquote data-aos="fade-up" data-aos-offset="-500">
        <q>生活的答案不在远方的眺望里，而在眼前认真做好的每一件小事中。</q>
        <div class="author-name">汪曾祺</div>
      </blockquote>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.refresh();
});
</script>

<style lang="scss" scoped></style>
