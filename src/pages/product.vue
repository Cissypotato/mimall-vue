<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <div class="btn btn-litle">立即购买</div>
      </template>
    </ProductParam>
    <div class="banner1">
      <div class="title">
      小米<div class="b">8</div>
      </div>
      <div class="info">8周年旗舰版</div>
      <div class="tags">
        全球首款双频 GPS
        <span>|</span>骁龙845
        <span>|</span>AI 变焦双摄
        <span>|</span>红外人脸识别
      </div>
      <div class="price">
        <span class="real"><span>￥</span>2599</span>
        <span class="fore"><span>￥</span>2999</span>
      </div>
    </div>
    <div class="container">
      <img src="../../public/imgs/product/product-bg-2.png" alt="" srcset="">
    </div>
    <div class="banner2">
     <img src="../../public/imgs/product/product-bg-3.png" alt="" srcset="">
    </div>
    <div class="slider-box">
    <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    
    </div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam,
  },
data(){
  return{
     swiperOption: {
        autoplay: true,
        effect: "cube",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
  }

  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/btn.scss";
@import "../assets/scss/mixin.scss";

.product {
  .banner1{
    @include bgImg(100vw,718px,'../../public/imgs/product/product-bg-1.png','cover');
    >div{
      text-align: center;
      color:#333;
      font-weight:bold;
    }
    .title{
      font-size:80px;
      margin-top: 50px;
      >.b{
        display: inline-block;
        margin-bottom:-12px;
        font-size: 99px;
        line-height: 120px;
        vertical-align: bottom;
      }
    }
    .info{
      
      font-size:24px;
      letter-spacing: 0.6em;
      // margin-top: 50px;
    }
    .tags{
      font-size:16px;
      margin-top: 10px;
      span{
        color: #BFAB9D;
        margin: 0 15px;
      }
    }
    .price{
      border: 1px solid pink;
      margin-top: 30px;
      .real{
        font-size: 38px;
        >span{font-size:30px;margin-right: 2px;margin-top: -4px;
        display: inline-block;vertical-align: top;}
      }
      .fore{
        font-size: 26px;
        text-decoration: line-through;
        margin-left: 11px;
        
      }
    }
  }
  >.container{
    
    img{width: 100%;}
  }
  .banner2{
     img{width: 100%;vertical-align: middle;}
  }
  .swiper-box{
    position: relative;
  }
}
</style>
