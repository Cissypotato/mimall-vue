<template>
  <div class="order-header">
      <div class="container">
        <div class="left">
          <a href="/#/index"></a>
        </div>
        <div class="middle">
          <h2>{{title}}<slot name="tip"></slot></h2>
        </div>
        <div class="right">
          {{userName}}
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:"order-header",
  props:{
    title:String
  },
  computed:{
    ...mapState(['userName'])
  }
}
</script>

<style lang="scss" >
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.order-header{
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
        padding-left: 53px;
        font-weight: bold;
        >h2{
        font-size: 28px;
        color: #333;
          >span{
           font-size: 14px;
            color: #999;
            margin-left: 17px;
        }
        }
       
      }
      .right {
        width: 50px;
        text-align: right;
        font-size: 16px;
        color: #666;
        font-weight: bold;
      }
    }
}

</style>
