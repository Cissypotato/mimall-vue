<template>
  <div class="detail">
    <ProductParam :title="product.name"></ProductParam>
    <div class="main">
      <div class="container">
        <div class="swiper-box">
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
        <div class="info-box">
         <div class="top">
          <div class="title">{{product.name}}</div>
          <div class="tags">
          相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄
          
          </div>
          <div class="mi">小米自营</div>
          <div class="price">{{product.price}}元<span class="fore">{{product.price+300}}元</span></div>
         </div>
         <div class="adress-wrapper">
          <div class="adress"> <span class="icon"></span>北京 北京市 朝阳区 安定门街道</div>
          <div class="can-buy">有现货</div>
         </div>
         <div class="type-wrapper">
          <div class="version">
           <div class="title">选择版本</div>
           <div class="options">
            <div class="option-item" :class="{'active':version==1}" @click="version=1"><span>6GB+64GB 全网通 </span>   {{product.price}}元</div>
            <div class="option-item" :class="{'active':version==2}"  @click="version=2"><span>4GB+64GB 移动4G  </span>  {{product.price}}元 </div>
           </div>
          </div>
           <div class="color">
           <div class="title">选择颜色</div>
           <div class="options">
            <div class="option-item active"><div></div> 深空灰</div>
           </div>
          </div>
         </div>
        <div class="price-wrapper">
            <div class="info">
             <span>小米8 {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</span>
             <span>{{product.price}}元 </span>
            </div>
            <div class="price">总计：{{product.price}}元</div>
        </div>
        <div class="btn-wrapper">
         <div class="btn btn-large" @click="addCart">加入购物车</div>
        <!-- <div  class="btn btn-default"><span></span>喜欢</div> -->
        </div>
        </div>
      </div>
    </div>
    <div class="peice-statement">
     <div class="container">
     价格说明
     <div>
      <img src="/imgs/detail/item-price.jpeg" >
     </div>
     
     </div>
    
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
import ServiceBar from "../components/ServiceBar";
import {    swiper,    swiperSlide} from "vue-awesome-swiper";
export default {
  name: "detail",
  components: {
    ProductParam,
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      id:this.$route.params.id,
      product: {},
      version:1,
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperList: [
        {
          img: "/imgs/detail/phone-1.jpg",
        },
        {
          img: "/imgs/detail/phone-2.jpg",
        },
        {
          img: "/imgs/detail/phone-3.jpg",
        },
        {
          img: "/imgs/detail/phone-4.jpg",
        },
      ],
      isSlide: false,
    }
  },
  mounted(){
    this.getProductInfo()
  },
  methods:{
    getProductInfo(){
     this.axios.get(`/products/${this.id}`).then((res)=>{
                // console.log(res)
                this.product=res
            })
    },
    addCart(){
      this.axios.post('/carts',{
        productId:this.id,
        selected: true
      }).then((res={cartTotalQuantity:0})=>{
        console.log(res)
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
        this.$router.push('/cart')
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/btn.scss';
.detail {
  .main {
    padding: 20px 0 50px;
    .container {
      // border: 1px solid red;
      display: flex;
      justify-content: space-between;
      .swiper-box {
        width: 48%;
        border: 1px solid blue;
      }
      .info-box {
        width: 48%;
        // border: 1px solid green;
        .top{
          padding-bottom: 25px;
          border-bottom: 1px solid #E5E5E5;
          .title{
            font-size: 28px;
            color: #333;
            font-weight: bold;
            line-height: 60px;
          }
          .tags{
            font-size: 14px;
            color: #999;
            font-weight: bold;
            line-height: 22px;
          }
          .mi{
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 16px;
            color: #FF6700;
            font-weight: bold;
            line-height: 22px;
          }
          >.price{
            font-size: 22px;
            color: #FF6700;
            font-weight: bold;
            line-height: 22px;
            .fore{
              margin-left: 10px;
              text-decoration: line-through;
              font-size: 13px;
              color: #999;
              font-weight: bold;
              line-height: 22px;
            }
          }
        }
        .adress-wrapper{
          margin-top: 28px;
          height: 108px;
          background: #F5F5F5;
          border: 1px solid  #e5e5e5;
          padding-left: 34px;
          .adress{
            // border: 1px solid red;
            display: flex;
            align-items: center;
           
            >.icon{
              @include bgImg(20px,22px,'/imgs/detail/icon-loc.png');
              margin-right:10px ;
            }
            color: #666;
            font-size: 14px;
            line-height: 60px;
            >.change{
              margin-left: 14px;
              color: #FF6700;
            }
          }
          .can-buy{
            font-size: 14px;
            color: #FF6700;
            margin-left: 30px;
          }
        }
        .type-wrapper{
          .version,.color{
            .title{
              font-size:18px ;
              font-weight:bold ;
              color:#333 ;
              line-height: 60px;
            }
            .options{
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              .option-item{
                width: 287px;
                text-align: center;
                height: 50px;
                line-height: 50px;
                border: 1px solid #e5e5e5;
                font-size: 16px;
                color: #333;
                >span{font-weight: bold;}
                &.active{
                  border: 1px solid #FF6600;
                  >span{color: #FF6600;}
                }
              }
            }
          }
          .color{
            >.options{
              >.option-item{
                >div{
                  display: inline-block;
                  width:14px ;
                  height: 16px;
                  background:#666 ;
                  margin-bottom: -3px;
                  margin-right: 9px;
                }
              }
            }
          }
        }
        .price-wrapper{
          margin-top: 28px;
          height: 108px;
          background: #F5F5F5;
          padding-left: 34px;
           padding-right: 34px;
          >.info{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight: bold;
            line-height: 60px;
            color: #333;
          }
          >.price{
            font-size: 24px;
            font-weight: bold;
            color: #FF6600;
          }
        }
        .btn-wrapper{
          margin-top:30px ;
          display: flex;
          align-items: center;
          >.btn-default{
            height: 54px;
            line-height: 54px;
            margin-left: 20px;
          }
        }
      }
    }
  }
  .peice-statement{
    height: 340px;
    background: #f3f3f3;
    font-size:24px ;
    font-weight: bold;
    color: #333;
    line-height:80px ;
  }
}
</style>
