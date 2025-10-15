<template>
  <div class="aboutUs">
    <SiteBanner pageTitle1="关于我们" pageTitle2="About Us" />
    <!--site-banner-->

    <section class="chief-detail padding-medium">
      <div class="container">
        <div class="row">
          <div class="single-image col-md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
              leo vel orci malesuada, id sodales em volutpat. Vivamus sagittis
              pulvinar dignissim. Mauris tempus a lacus eu aliquet. Mauris
              gravida at ectus quis venenatis. Aenean quis feugiat turpis. Etiam
              lacinia interdum nibh, non convallis magna lementum vel. Phasellus
              varius quam ligula, in lobortis risus porttitor ut. Praesent ipsum
              elit, lobortis n tincidunt a, dapibus et lorem. Praesent eget dui
              a est fringilla rutrum sit amet in eros. Vestibulum ut ros sed
              enim feugiat lobortis. Suspendisse fermentum nunc in est mattis
              molestie. Mauris ut placerat isus. Aenean mollis neque libero, ut
              pellentesque arcu dapibus vel.
            </p>
            <p>
              Praesent nec nisl euismod, lacinia tellus eget, bibendum ex.
              Maecenas imperdiet gravida pulvinar. aecenas feugiat id tellus sed
              sodales. Praesent maximus ultricies elit eget accumsan. Proin
              tortor ante, ltrices a aliquet a, facilisis quis sapien. Donec eu
              turpis at velit scelerisque faucibus id eget dolor. tiam lobortis
              ante ipsum, sed venenatis ligula facilisis quis. Fusce blandit
              commodo mauris, sed fringilla isi congue et. Nunc eu eros ex.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title mb-4">我们的团队</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 Card" v-for="item in imageList">
            <div class="team-member text-center pb-5">
              <figure>
                <img :src="item.images" alt="post" class="member-image" />
              </figure>

              <div class="member-details text-center">
                <h4>Mrs. Nocole Sara</h4>
                <div class="designation colored">CEO-Founder</div>
              </div>
            </div>
          </div>
          <!--col-md-3-->
        </div>

        <h3 class="section-title mt-5">我们追求的目标</h3>
        <div class="row">
          <div class="col-md-12">
            <img
              src="images/aboutUs/post-img3.jpg"
              alt="book-authors"
              class="align-right"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import SiteBanner from "@/components/SiteBanner.vue";
import Footer from "@/view/Page01/Footer.vue";

const imageList = [
  {
    images: "src/assets/images/aboutUs/team-member2.jpg",
    cont: "Mrs. Nocole Sara",
    designation: "CEO-Founder",
  },
  {
    images: "src/assets/images/aboutUs/team-member1.jpg",
    cont: "Mrs. Nocole Sara",
    designation: "CEO-Founder",
  },
  {
    images: "src/assets/images/aboutUs/team-member5.jpg",
    cont: "Ms Sienna Jolie",
    designation: "General Manager",
  },
  {
    images: "src/assets/images/aboutUs/team-member7.jpg",
    cont: "Ms Jenny Blacksmith",
    designation: "Assistant Manager",
  },
  {
    images: "src/assets/images/aboutUs/team-member3.jpg",
    cont: "Mrs Lora Inn",
    designation: "Staff",
  },
  {
    images: "src/assets/images/aboutUs/team-member6.jpg",
    cont: "Mrs. Nocole Sara",
    designation: "CEO-Founder",
  },
  {
    images: "src/assets/images/aboutUs/team-member4.jpg",
    cont: "Mrs. Nocole Sara",
    designation: "CEO-Founder",
  },
];
</script>

<style lang="scss" scoped>
.aboutUs {
  padding-top: 50px;
  text-align: left;
  background-color: var(--theme01);
  .Card {
    figure {
      margin-bottom: 2.5rem;
    }
  }
}
.breadcum-items {
  color: var(--theme10);
}
</style>
