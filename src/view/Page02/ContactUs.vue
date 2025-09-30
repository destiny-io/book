<template>
  <div class="ContactUs">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="page-title">联系我们</h1>
            <div class="breadcrumbs">
              <span class="item"
                ><router-link to="/">首页 / </router-link></span
              >
              <span class="item">Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-information padding-medium mt-3">
      <div class="container">
        <div class="row g-5">
          <div class="col-md-6 mb-3">
            <h2>和我们取得联系</h2>

            <div class="contact-detail d-flex flex-wrap mt-4">
              <div class="detail mr-6 mb-4">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <ul class="list-unstyled list-icon">
                  <li><i class="icon icon-phone"></i>+1650-243-0000</li>
                  <li>
                    <i class="icon icon-envelope-o"></i
                    ><a href="mailto:info@yourcompany.com"
                      >info@yourcompany.com</a
                    >
                  </li>
                  <li>
                    <i class="icon icon-location2"></i>North Melbourne VIC 3051,
                    Australia
                  </li>
                </ul>
              </div>
              <!--detail-->
            </div>
            <!--contact-detail-->
          </div>
          <!--col-md-6-->

          <div class="col-md-6">
            <div class="contact-information">
              <h2>给我们发送消息</h2>
              <form
                name="contactform"
                action="contact.php"
                method="post"
                class="form-group contact-form mt-4"
              >
                <div class="row">
                  <div class="col-md-6">
                    <input
                      type="text"
                      minlength="2"
                      name="name"
                      placeholder="Name"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      class="form-control"
                      required
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Message"
                      style="height: 150px"
                      required
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <label>
                      <input type="checkbox" required />
                      <span class="label-body"
                        >I agree all the
                        <a href="#">terms and conditions</a></span
                      >
                    </label>

                    <button
                      type="submit"
                      name="submit"
                      class="btn btn-primary btn-rounded w-100"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!--contact-information-->
          </div>
          <!--col-md-6-->
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/view/Page01/Footer.vue";
// 这个是联系我们
</script>

<style lang="scss" scoped>
.ContactUs {
  text-align: left;
}
</style>
