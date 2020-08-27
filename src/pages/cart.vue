
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
            <div class="option">
              <span class="pick" :class="{'picked': selectedAll}" @click="toggleSelect"></span>全选
            </div>
            <div class="name">商品名称</div>
            <div class="price">单价</div>
            <div class="num">数量</div>
            <div class="count">小计</div>
            <div class="operate">操作</div>
          </div>
          <div class="card-item" v-for="item in list" :key="item.id">
            <div class="option">
              <span class="pick" :class="{'picked': item.productSelected}" @click="updateCart(item)"></span>
            </div>
            <div class="name">
              <img v-lazy="item.productMainImage" alt />
              {{item.productName}} {{item.productSubtitle}}
            </div>
            <div class="price">{{item.productPrice}}元</div>
            <div class="num">
              <span @click="updateCart(item,'-')">-</span>
              <span>{{item.quantity}}</span>
              <span @click="updateCart(item,'+')">+</span>
            </div>
            <div class="count">{{item.productTotalPrice}}元</div>
            <div class="operate">
              <span @click="delProduct(item)"></span>
            </div>
          </div>
          
        </div>
         <div class="total">
          <div class="total-tip">共 {{list.length}} 件商品，已选择 {{checkedNum}} 件</div>
          <div class="btn-wrapper">
           合计：<span>{{cartTotalPrice}}</span>元
           <div class="btn btn-small" @click="order">去结算</div>
          </div>
         </div>
      </div>
     
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import { Message} from 'element-ui';
import orderHeader from "../components/OrderHeader";
import navFooter from "../components/NavFooter";
import ServiceBar from "../components/ServiceBar";

export default {
  name: "cart",
  components: {
    orderHeader,
    navFooter,
    ServiceBar
  },
  data(){
    return{
    list:[],
    selectedAll:false,
    cartTotalPrice:0,
    cartTotalQuantity:0,
    checkedNum:0
    }
    
  },
  mounted(){
    this.getCartList()
  },
  methods:{
    getCartList(){
      this.axios.get('/carts').then((res)=>{
        this.renderData(res)
      })
    },
    updateCart(item,type){//加减商品和选择商品
      let quantity=item.quantity
      let selected=item.productSelected
      if(type=="-"){
        if(quantity==1){
          Message.warning('商品数量不能再减少了')
          return
        }
        --quantity;
      }else if(type=="+"){
        if(quantity>item.productStock){
          Message.warning('超过商品库存')
          return
        }
        ++quantity;
      }else{
        selected=!selected
      }
      this.axios.put(`/carts/${item.productId}`,{
        quantity,
        selected
      }).then(res=>{
        this.renderData(res)
      })
    },
    delProduct(item){//删除
      this.axios.delete(`/carts/${item.productId}`).then(res=>{

        //确认弹框
         Message.success('删除成功')
        this.renderData(res)
      })
    },
    toggleSelect(){//全选和取消全选
      let url=this.selectedAll?'/carts/unSelectAll':'/carts/selectAll'
      this.axios.put(url).then((res)=>{
        this.renderData(res)
      })
    },
    order(){
      let isChecked=this.list.every(item=>!item.productSelected)
      if(isChecked){
        Message.warning('请至少选择一件商品')
      }else{
        this.$router.push('/order/confirm')
      }
    },
    renderData(res){
        this.list=res.cartProductVoList || []
        this.selectedAll=res.selectedAll
        this.cartTotalPrice=res.cartTotalPrice
        this.checkedNum=this.list.filter(item=>item.productSelected).length
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/btn.scss";
.cart {
  > .main {
    padding-top: 30px;
    background-color: #f5f5f5;
    > .container {
      padding-bottom:114px ;
      > .card {
        padding: 0 43px;
        background: #fff;
        .card-top,
        .card-item {
          display: flex;
          text-align: center;
          align-items: center;
          // border: 1px solid green;
          // >div{border: 1px solid red;}
          .option,
          .price,
          .count {
            width: 12%;
          }
          .operate {
            width: 8%;
          }
          .option {
            display: flex;
            align-items: center;
            .pick {
              width: 22px;
              height: 22px;
              border: 1px solid #e5e5e5;
              margin-right: 17px;
              &.picked{
                @include bgImg(22px, 22px, "/imgs/icon-gou.png");
                background-color: #ff6600;
                border:none
              }
            }
            
          }
          .num {
            width: 150px;
          }
          > .name {
            flex: 1;
          }
        }
        .card-top {
          font-size: 14px;
          color: #666;
          height: 80px;
        }
        .card-item {
          color: #333;
          height: 125px;
          border-top: 1px solid #e5e5e5;
          > .name {
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
            > img {
              width: 80px;
              height: 80px;
              margin-right: 30px;
            }
          }
          > .price,
          .count {
            font-size: 16px;
            font-weight: bold;
          }
          > .count {
            color: #ff6600;
          }
          > .num {
            border: 1px solid #e5e5e5;
            width: 150px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            padding: 0 22px;
            display: inline-flex;
            justify-content: space-between;
            >span{cursor: pointer;}
          }
          > .operate {
            > span {
              @include bgImg(14px, 12px, "/imgs/icon-close.png");
              cursor: pointer;
            }
          }
        }
      }
      .total{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .total-tip{
          font-size: 14px;
          color: #666;
        }
        >.btn-wrapper{
          color: #ff6600;
          font-size: 14px;
          >span{
            font-size: 16px;
            font-weight: bold;
          }
          >.btn{
            margin-left: 30px;
          }
        }
      }
    }
  }
}
</style>