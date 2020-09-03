<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话</span>
      </template>
    </order-header>
    <div class="container">
      <div class="card1">
        <div class="top">
          <div class="icon-wrap">
            <span></span>
          </div>
          <div class="info-wrap">
            <p>订单提交成功！去付款咯～</p>
            <div>
              请在
              <span>0小时30分</span>内完成支付, 超时后将取消订单
              <br />
              收货信息：{{address}}
              <!--高丽 183****0972 北京 北京市 朝阳区 望京 -->
            </div>
          </div>
          <div class="price-wrap">
            <p>
              应付总额：
              <span>{{payment}}元</span>
            </p>
            <div>
              订单详情
              <a href="javascript:;" :class="{'up':showGoods}" @click="showGoods=!showGoods"></a>
            </div>
          </div>
        </div>
        <div class="product" v-if="showGoods">
          <div class="item">
            <span class="l">订单号：</span>
            <span class="r">{{orderNo}}</span>
          </div>
          <div class="item">
            <span class="l">收货信息：</span>
            <span class="r">{{address}}</span>
          </div>
          <div class="item" v-for="(item,index) in goodslist" :key="index">
            <span class="l">商品名称：</span>
            <span class="r">
              <img :src="item.productImage" />
              {{item.productName}}
            </span>
          </div>
          <div class="item">
            <span class="l">发票信息：</span>
            <span class="r">电子发票个人</span>
          </div>
        </div>
      </div>

      <div class="card2">
        <p>选择以下支付方式付款</p>
        <h5>支付平台</h5>
        <div>
          <a
            href="javascript:;"
            class="alipay"
            :class="{'checked':payType==1}"
            @click="paySubmit(1)"
          ></a>
          <a
            href="javascript:;"
            class="wechat"
            :class="{'checked':payType==2}"
            @click="paySubmit(2)"
          ></a>
        </div>
      </div>
    </div>
    <pay-modal v-show="showPay" @close="closePayModal" :img="wechatPayImg">
    </pay-modal>
    <modal
      :showModal="isPayModal"
      title="确认支付"
      btnTypeType="3"
      confirmText="查看订单"
      cancelText="未支付"
      @cancel="isPayModal=false"
      @submit="toOrderList"
    >
      <template v-slot:body>
        <div>
          请确认是否已经支付
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import orderHeader from '../components/OrderHeader'
import { Message} from 'element-ui';
import PayModal from "../components/PayModal"
import Modal from "../components/Modal"
export default {
  name: "orderPay",
  components:{
      PayModal,
      Modal,
      orderHeader
  },
  data() {
    return {
      orderNo: this.$route.query.orderNo,
      address: "",
      payment: "",
      goodslist: [],
      showGoods: false,
      payType: 0, //支付类型，1支付宝，2微信
      wechatPayImg:'',
      showPay:false,//微信支付弹出框
      isPayModal:false,//确认是否登录弹出框
      T:'',//interval名
    };
  },
  mounted() {
    this.getOrderInfo();
  },
  methods: {
    getOrderInfo() {
      this.axios.get(`/orders/${this.orderNo}`).then((res) => {
        console.log(res);
        let address = res.shippingVo;
        this.address = `${address.receiverName} ${address.receiverMobile}  ${address.receiverProvince}  ${address.receiverCity}  ${address.receiverDistrict}  ${address.receiverAddress}`;
        this.payment = res.payment;
        this.goodslist = res.orderItemVoList;
      });
    },
    paySubmit(payType) {
      if (payType == 1) {
        this.payType = 1;
        window.open("/#/order/alipay?orderId=" + this.orderNo, "__blank");
      } else {
        this.payType = 2;
        this.axios.post("/pay", {
            orderId: this.orderNo,
            orderName: "vue2高仿小米商城", //扫码支付时订单名称
            amount: 0.01, //单位元
            payType: 2, //1支付宝，2微信
          })
          .then((res) => {
            QRCode.toDataURL(res.content)
              .then((url) => {
                this.showPay=true
                this.wechatPayImg=url
                this.loopOrderState()
              })
              .catch(() => {
                // console.error(err);
                Message.error('微信支付二维码生成失败，请稍后重试')
              });
          });
      }
    },
    closePayModal(){
      this.showPay=false
      this.isPayModal=true
      clearInterval(this.T)
    },
    loopOrderState(){
      this.T=setInterval(()=>{
        this.axios.get(`/orders/${this.orderNo}`).then(res=>{
          if(res.status==20){
            clearInterval(this.T)
            this.toOrderList()
          }
        })
      },1000)
    },
    toOrderList(){
      this.$router.push('/order/orderList')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/btn.scss";
.order-pay {
  background: #f5f5f5;
  padding-bottom: 260px;
  border: 0.1px solid #e5e5e5;
  .container {
    .card1,
    .card2 {
      margin-top: 30px;
      padding: 0 53px;
      background: #fff;
    }
    .card1 {
      .top {
        display: flex;
        align-items: center;
        height: 230px;
        border-bottom: 1px solid #e5e5e5;
        .icon-wrap {
          width: 90px;
          height: 90px;
          background: #7ec688;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          > span {
            @include bgImg(60px, 60px, "/imgs/icon-gou.png");
          }
        }
        .info-wrap {
          margin-left: 40px;
          flex: 1;
          > p {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            line-height: 60px;
          }
          > div {
            font-size: 14px;
            font-weight: bold;
            color: #666;
            line-height: 24px;
            > span {
              color: #ff6600;
            }
          }
        }
        .price-wrap {
          width: 16%;
          font-size: 14px;
          color: #666;
          line-height: 24px;
          text-align: right;
          > p {
            line-height: 60px;
            span {
              font-weight: bold;
              color: #ff6600;
              font-size: 18px;
            }
          }
          > div {
            > a {
              margin-left: 5px;
              @include bgImg(14px, 10px, "/imgs/icon-down.png");
              transition: all 0.6s;
              &.up {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
      .product {
        padding: 20px 0 60px;
        .item {
          display: flex;
          line-height: 40px;
          font-size: 14px;
          color: #333;
          .l {
            margin-left: 132px;
          }
          .r {
            margin-left: 20px;
            display: flex;
            align-items: center;
            > img {
              width: 25px;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .card2 {
      color: #333;
      height: 270px;
      > p {
        line-height: 70px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 20px;
        font-weight: bold;
      }
      > h5 {
        font-size: 18px;
        line-height: 60px;
      }
      > div {
        > .alipay {
          border: 1px solid #e5e5e5;
          @include bgImg(188px, 64px, "/imgs/pay/icon-ali.png");
          margin-right: 20px;
          &.checked {
            border: 1px solid #ff6600;
          }
        }
        > .wechat {
          border: 1px solid #e5e5e5;
          @include bgImg(188px, 64px, "/imgs/pay/icon-wechat.png");
          margin-right: 20px;
          &.checked {
            border: 1px solid #ff6600;
          }
        }
      }
    }
  }
}
</style>
