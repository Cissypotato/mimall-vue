<template>
  <div class="wechat-pay-modal">
    <div class="mask"></div>
    <div class="main">
      <div class="left-img">
        <img src="/imgs/pay/icon-scan.png" alt />
      </div>
      <div class="code">
        <div class="header">
          <span>微信支付</span>
          <span @click="close" class="close">X</span>
        </div>
        <div class="img">
          <img :src="img" alt />
        </div>
        <div class="footer">
          请使用微信扫一扫
          <br />二维码支付
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "payModal",
  props: ["img"],
  methods:{
    close(){
      this.$emit('close')
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.wechat-pay-modal {
  @include position(fixed);
  z-index: 9;
  .mask {
    @include position(fixed);
    background-color: $colorI;
    opacity: 0.2;
  }
  .main {
    color: #333;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    .left-img {
      > img {
        width: 296px;
      }
    }
    > .code {
      width: 370px;
      height: 440px;
      background: #fff;
      > .header {
        font-size: 20px;
        height: 60px;
        line-height: 60px;
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
        background: #f5f5f5;
        >.close{
          cursor: pointer;
        }
      }
      >.img{
        
        text-align: center;
        padding: 44px 0 25px;
        >img{
          width: 240px;
        }
      }
      .footer{
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>