<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper>
          <swiper-slide></swiper-slide>
        </swiper>
      </div>
      <div class="swiper-box"></div>
      <div class="swiper-box"></div>
      <div class="swiper-box"></div>
    </div>
11111111
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  }
};
</script>

<style lang="stylus" scoped></style>
