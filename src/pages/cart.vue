
<template>
  <div class="cart">
   
    <order-header title="我的购物车">
     <template v-slot:tip>
       
         <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
       
     </template>
    </order-header>
    <div class="main">
        <div class="container">
         <div class="card">
         <div class="card-top">
          <div class="option"><span></span>全选</div>
          <div class="name">商品名称</div>
          <div class="price">单价</div>
          <div class="num">数量</div>
          <div class="count">小计</div>
          <div class="operate">操作</div>
         </div>
          <div class="card-item">
          
          <div class="option"><span></span></div>
          <div class="name">
            <img src="" alt="">
            小米8 6GB 全息幻彩紫 64GB
          </div>
          <div class="price">1999元</div>
          <div class="num">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div class="count">1999元</div>
          <div class="operate">x</div>
          </div>
         </div>
        <div class="total"></div>
        </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import orderHeader from '../components/OrderHeader'
import navFooter from '../components/NavFooter'
export default {
  name:'cart',
  components:{
    orderHeader,
    navFooter
  }
}
</script>

<style lang="scss">
  .cart{
    
    >.main{
      padding-top:30px;
      background-color: #f5f5f5;
      >.container{
        >.card{
          padding: 0 43px;
          background: #fff;
          .card-top,.card-item{
            display: flex;
            height: 80px;
            border-bottom: 1px solid #e5e5e5;
            text-align: center;
            align-items: center;
            // border: 1px solid green;
            >div{border: 1px solid red;}
            .option,.price,.count,.operate{width: 11%;}
            .num{width: 18%;}
            >.name{flex: 1;}
          }
          .card-top{
            font-size: 14px;
            color: #666;
          }
          .card-item{
           color: #333;
          }
        }
      }
    }
  }
</style>