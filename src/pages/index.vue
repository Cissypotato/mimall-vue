<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">手机 电话卡</a>
              <div class="item-children">
                <ul>
                  <li v-for="(item,index) in menuList" :key="index">
                    <a :href="item?'/#/product/'+item.id:''">
                      <img :src="item?item.img:'/imgs/item-box-1.png'" />
                    </a>
                    {{item?item.name:'小米cc9'}}
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">电视 盒子</a>
              <!-- <div class="item-children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">笔记本 平板</a>
              <!-- <div class="item-children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">家电 插线板</a>
              <!-- <div class="item-children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">出行 穿戴</a>
              <!-- <div class="item-children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">耳机 音箱</a>
              <!-- <div class="item-children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">电源 配件</a>
              <!-- <div class="item-children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="menu-item-name">生活 箱包</a>
              <!-- <div class="item-children"></div> -->
            </li>
          </ul>
        </div>
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
      <div class="ads-box">
        <a v-for="(item,index) in adsList" :key="index" :href="'/#/product/'+item.id">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner-box">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <img src="/imgs/mix-alpha.jpg" alt />
          </div>
          <div class="item-wrapper">
            <div class="item" v-for="(item,index) in newProList" :key="index">
              <div class="tag">
                
                <span class="kill-pro"  v-if="index%4==0">秒杀</span>
                <span class="new-pro" v-else >新品</span>
              </div>
              <div class="img">
                <img v-lazy="item.mainImage">
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}}</p>
                <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示" confirmText="点击查看详情" :showModal="showModal" btnType="1"
     modalType="middle"
     @cancel="closeModal"
     @submit="toCart"
     >
       <template #body>
    <div>加入购物车成功！</div>
  </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
   
  },
  data() {
    return {
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
      menuList: [
        {
          id: "30",
          img: "/imgs/item-box-1.png",
          name: "小米cc9"
        },
        {
          id: "31",
          img: "/imgs/item-box-2.png",
          name: "小米8青春版"
        },
        {
          id: "32",
          img: "/imgs/item-box-3.jpg",
          name: "Redme K20 pro"
        },
        {
          id: "33",
          img: "/imgs/item-box-4.jpg",
          name: "移动4G专区"
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      adsList: [
        {
          id: "33",
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: "48",
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: "45",
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: "47",
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      newProList: [1, 1, 1, 1, 1, 1, 1, 1],
      showModal:false
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios.get("/products", {
        params: {
          categoryId: 100012,
          pageSize:14
        }
      }).then((res)=>{
        console.log(res)
        res.list=res.list.slice(6,14)
        this.newProList=res.list
      });
    },
    addCart(){
      this.showModal=true
//       this.axios.post('/carts',{
//         productId:id,
// selected: true
//       }).then((res)=>{
//         console.log(res)
//       })
    },
    closeModal(){
      this.showModal=false
    },
    toCart(){
      this.$router.push('/cart')
    }
  }
};
</script>

<style lang="scss" >
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    position: relative;
    .nav-menu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 264px;
      background-color: rgba(85, 87, 89, 0.5);
      padding: 26px 0;
      box-sizing: border-box;
      .menu-item {
        position: relative;
        .menu-item-name {
          display: block;
          height: 50px;
          line-height: 50px;
          color: #fff;
          font-size: 16px;
          font-family: FZLanTingHeiS-R-GB;
          font-weight: bold;
          padding-left: 30px;
          position: relative;
          &::after {
            position: absolute;
            content: "";
            right: 30px;
            top: 17.5px;
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
          }
          &:hover {
            background: $colorA;
          }
        }
        .item-children {
          border-top: 1px solid #e5e5e5;
          position: absolute;
          left: 264px;
          top: -26px;
          background: #fff;
          width: 964px;
          height: 451px;
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              width: 25%;
              height: 75px;
              line-height: 75px;
              box-sizing: border-box;
              padding-left: 23px;
              img {
                width: 35px;
                height: 42px;
                vertical-align: middle;
                margin-right: 15px;
              }
              font-size: 14px;
              font-family: FZLanTingHeiS-R-GB;
              font-weight: bold;
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        margin-left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    display: flex;
    justify-content: space-between;
    margin: 14px 0 31px;
    a {
      display: inline-block;
      width: 296px;
      height: 167px;
    }
  }
  .banner-box {
    height: 130px;
    a {
      display: block;
    }
  }
  .product-box {
    background: $colorH;
    padding-bottom: 50px;
    h2 {
      line-height: 71px;
      font-size: 22px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
          vertical-align: middle;
        }
      }
      .item-wrapper {
        display: flex;
        width: 100%;
        height: 619px;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;

        .item {
          background: #fff;
          width: 236px;
          height: 302px;
          margin-right: 14px;
          box-sizing: border-box;
          .tag {
            text-align: center;
            color: #fff;
            span {
              display: inline-block;

              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              &.new-pro {
                background: #7ecf68;
              }
              &.kill-pro {
                background: #e82626;
              }
            }
          }
          .img {
            text-align: center;
            height: 175px;
            margin-top: 10px;
            img {
              // width: 100%;
              height: 162px;
              // height: 194px;
            }
          }
          .item-info {
            text-align: center;
            h3 {
              font-size: 14px;
              font-family: FZLanTingHeiS-R-GB;
              font-weight: bold;
              color: $colorB;
            }
            p {
              font-size: 12px;
              font-weight: bold;
              color: $colorD;
            }
            .price {
              margin-top: 10px;
              font-size: 14px;
              color: #f20a0a;
              &::after {
                content: "";
                @include bgImg(22px, 15px, "/imgs/icon-cart-hover.png");
                vertical-align: middle;
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
