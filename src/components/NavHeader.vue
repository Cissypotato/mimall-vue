<template>
  <div class="header">
    <div class="bar-wrapper">
      <div class="container">
        <div class="left">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>logout
        <div class="right">
          <a href="javascript:;" v-if="userName">{{userName}}</a>
          <a href="javascript:;" v-if="!userName" @click="toLogin">登录</a>
           <a href="javascript:;" v-if="userName" @click="logout">退出</a>
          <a href="javascript:;" v-if="userName" @click="toOrderList">我的订单</a>
          <a href="javascript:;" class="cart" @click="toCart">
            <span class="cart-icon"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="left">
          <a href="/#/index"></a>
        </div>
        <div class="middle">
          <div class="item">
            <span>小米手机</span>
            <!-- <div class="children"> -->
            <ul class="children">
              <li v-for="item in phoneList" :key="item.id">
                <a :href="'/#/product/'+item.id">
                  <div class="img">
                    <img :src="item.mainImage"/>
                  </div>
                  <div class="name">{{item.name}}</div>
                  <div class="price">{{item.price | formatPrice}}</div>
                </a>
              </li>
              <!-- <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li> -->
            </ul>
            <!-- </div> -->
          </div>
          <div class="item">
            <span>Redmi红米</span>
             <!-- <ul class="children">
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/item-box-1.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
            </ul> -->
          </div>
          <div class="item">
            <span>电视</span>
             <ul class="children">
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/nav-img/nav-3-1.jpg" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/nav-img/nav-3-2.jpg" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/nav-img/nav-3-3.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/nav-img/nav-3-4.jpg" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/nav-img/nav-3-5.jpg" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img">
                    <img src="/imgs/nav-img/nav-3-6.png" />
                  </div>
                  <div class="name">小米9</div>
                  <div class="price">2999元</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <input type="text" name="keyword" />
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message} from 'element-ui';
export default {
  name: "nav-header",
  data(){
    return {
      phoneList:[]
    }
  },
  computed:{
    userName(){
      return this.$store.state.userName
    },
    cartCount(){
      return this.$store.state.cartCount
    }
  },
  filters:{
    formatPrice(val){
      if(!val) return "00.00元"
      return val.toFixed(2) +"元"
    }
  },
  mounted(){
    this.getPhoneList()
    let params=this.$route.params
    console.log(params,'params')
    if(params && params.from=="login"){
      this.getCartCount()
    }
    
  },
  methods:{
    toLogin(){
      this.$router.push('/login')
    },
    logout(){
      console.log(1)
       this.axios.post('/user/logout').then((res)=>{
         console.log(res)
        Message.success('退出成功')
        this.$cookie.set('userId', '', {expires: -1});
        this.$store.dispatch('saveUsername','')
        this.$store.dispatch('saveCartCount',0)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        // console.log(res,'cartCount')
        this.$store.dispatch('saveCartCount',res)
      })
    },
     toCart(){
      this.$router.push('/cart')
    },
    toOrderList(){
      this.$router.push('/order/orderList')
    },
    getPhoneList(){
      this.axios.get('/products',{
       params:{
         categoryId:'100012'
       }
      }).then((res)=>{
        console.log(res)

        this.phoneList=res.list.slice(0,6)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .bar-wrapper {
    background: #333;
    .container {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        margin-right: 17px;
        color: #b0b0b0;
        font-size: 12px;
        font-family: "体FZLTHJW--GB1-0";
      }
      .cart {
        width: 110px;
        text-align: center;
        background: $colorA;
        height: 40px;
        color: #fff;
        margin-right: 0;
        .cart-icon {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          line-height: 40px;
        }
      }
    }
  }

  .header-bottom {
    .container {
      height: 112px;
      line-height: 112px;
      display: flex;
      align-items: center;
      position: relative;
      .left {
        display: inline-block;
        height: 55px;
        width: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          // border:1px solid red;
          &::before {
            content: " ";
            display: inline-block;
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &::after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .middle {
        flex: 1;
        display: flex;
        padding-left: 210px;
        // overflow: hidden;
        .item {
          font-size: 16px;
          font-family: FZLanTingHeiS-R-GB;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin-left: 20px;
          // border: 1px solid red;
          span {
            cursor: pointer;
           
          }
           &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          
          .children {
            overflow: hidden;
            height: 0;
            opacity: 0;
            width: 1226px;
            background: #fff;
            display: flex;
            position: absolute;
            top: 112px;
            left: 0;
            transition: all .2s;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            li {
              width: 16.66%;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
                width: 100%;
                .img {
                  width: 100%;
                  padding-top: 26px;
                  text-align: center;
                  height: 118px;
                  img {
                    height: 111px;
                    margin: 0 auto;
                  }
                }
                .name {
                  margin-top: 10px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 12px;
                  color: #333333;
                  font-family: FZLanTingHeiS-R-GB;
                  font-weight: bold;
                }
                .price {
                  height: 20px;
                  font-size: 12px;
                  font-family: FZLanTingHeiS-R-GB;
                  font-weight: bold;
                  color: rgba(255, 102, 0, 1);
                  line-height: 20px;
                }
                
              }
              &:not(:last-child):after {
                  position: absolute;
                  content: "";
                  display: inline-block;
                  width: 1px;
                  height: 99px;
                  background: #d7d7d7;
                  right: -1px;
                  top: 28px;
                }
            }
          }
        }
      }
      .right {
        width: 319px;
        height: 50px;
        outline: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          border: none;
          width: 264px;
          padding: 12px;
          border-right: 1px solid #e0e0e0;
          height: 50px;
          box-sizing: border-box;
        }
        a {
          display: inline-block;
          flex: 1;
          height: 50px;
          background: url("/imgs/icon-search.png") no-repeat center;
          background-size: 18px;
        }
      }
    }
  }
}
</style>
