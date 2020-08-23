<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <div class="btn btn-litle">立即购买</div>
      </template>
    </ProductParam>
    <div class="banner1">
      <div class="title">
        小米
        <div class="b">8</div>
      </div>
      <div class="info">8周年旗舰版</div>
      <div class="tags">
        全球首款双频 GPS
        <span>|</span>骁龙845
        <span>|</span>AI 变焦双摄
        <span>|</span>红外人脸识别
      </div>
      <div class="price">
        <span class="real">
          <span>￥</span>2599
        </span>
        <span class="fore">
          <span>￥</span>2999
        </span>
      </div>
    </div>
    <div class="container">
      <img src="../../public/imgs/product/product-bg-2.png" alt srcset />
    </div>
    <div class="banner2">
      <img src="../../public/imgs/product/product-bg-3.png" alt srcset />
    </div>
    <div class="slider-box">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <img :src="item.img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
     <div class="slider-title">小米8 AI变焦双摄拍摄</div>
    </div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "product",
  components: {
    ProductParam,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        slidesPerView: 3,
        spaceBetween: 22,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperList: [
        {
          id: "45",
          img: "/imgs/product/gallery-2.png",
        },
        {
          id: "46",
          img: "/imgs/product/gallery-3.png",
        },
        {
          id: "",
          img: "/imgs/product/gallery-4.png",
        },
        {
          id: "",
          img: "/imgs/product/gallery-5.jpg",
        },
        {
          id: "",
          img: "/imgs/product/gallery-6.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/btn.scss";
@import "../assets/scss/mixin.scss";

.product {
  .banner1 {
    @include bgImg(
      100vw,
      718px,
      "../../public/imgs/product/product-bg-1.png",
      "cover"
    );
    > div {
      text-align: center;
      color: #333;
      font-weight: bold;
    }
    .title {
      font-size: 80px;
      margin-top: 50px;
      > .b {
        display: inline-block;
        margin-bottom: -12px;
        font-size: 99px;
        line-height: 120px;
        vertical-align: bottom;
      }
    }
    .info {
      font-size: 24px;
      letter-spacing: 0.6em;
      // margin-top: 50px;
    }
    .tags {
      font-size: 16px;
      margin-top: 10px;
      span {
        color: #bfab9d;
        margin: 0 15px;
      }
    }
    .price {
      border: 1px solid pink;
      margin-top: 30px;
      .real {
        font-size: 38px;
        > span {
          font-size: 30px;
          margin-right: 2px;
          margin-top: -4px;
          display: inline-block;
          vertical-align: top;
        }
      }
      .fore {
        font-size: 26px;
        text-decoration: line-through;
        margin-left: 11px;
      }
    }
  }
  > .container {
    img {
      width: 100%;
    }
  }
  .banner2 {
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .slider-box {
    margin-top: 36px;
    position: relative;
    .swiper-container {
      width: 100%;
      .swiper-slide {
      }
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .slider-title{
      text-align: center;
      font-size: 18px;
      color: #333;
      margin:20px 0;
      line-height: 42px;
    }
    
  }
}
</style>
