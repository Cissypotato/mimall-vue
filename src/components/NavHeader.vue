<template>
  <div class="header">
    <div class="bar-wrapper">
      <div class="container">
        <div class="left">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="right">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="cart">
            <span class="cart-icon"></span>
            购物车(0)
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
            <div></div>
          </div>
           <div class="item">
            <span>Redmi红米</span>
            <div></div>
          </div>
           <div class="item">
            <span>电视</span>
            <div></div>
          </div>
        </div>
        <div class="right">
          <input type="text" name="keyword">
          <a href="javascript:;"></a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header"
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.header {
 
  .bar-wrapper {
     background: #333;
    .container{
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
      background: #ff6600;
      height: 40px;
      color: #fff;
      margin-right: 0;
      .cart-icon {
        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
        line-height: 40px;
        // display: inline-block;
        // width: 16px;
        // height: 12px;
        
        // background: url("/imgs/icon-cart-checked.png") no-repeat center;
        // background-size: contain;
      }
    }

    }
   
  }

  .header-bottom{
    .container{
      height:112px;
      line-height: 112px;
      display: flex;
      align-items: center;
      .left{
        display: inline-block;
        height:55px;
        width: 55px;
        background-color: #ff6600;
        a{
          display: inline-block;
          width: 110px;
          height:55px;
          // border:1px solid red;
          &::before{
            content: " ";
            display: inline-block;
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            // width: 55px;
            // height:55px;
            // background: url('/imgs/mi-logo.png') no-repeat center;
            // background-size: 55px;
            transition: margin .2s;

          }
          &::after{
            content: " ";
            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
            // display: inline-block;
            // width: 55px;
            // height:55px;
            // background: url('/imgs/mi-home.png') no-repeat center;
            // background-size: 55px;
          }
        &:hover:before{
          margin-left: -55px;
          transition: margin .2s;
          }


        }
      }
      .middle{
        flex:1;
        display: flex;
       padding-left: 210px;
        .item{
          font-size:16px;
          font-family:FZLanTingHeiS-R-GB;
          font-weight:bold;
          color:rgba(51,51,51,1);
          margin-left: 20px;
          span{cursor: pointer;}
          &:hover{
            color: #ff6600;
          }
        }
        
      }
      .right{
        width: 319px;
        height: 50px;
       border: 1px solid #e0e0e0;
       
       display: flex;
       align-items: center;
       input{
         border: none;
         width: 264px;
         padding: 12px;
         border-right: 1px solid #e0e0e0;
         height: 50px;
         box-sizing: border-box;
       }
       a{
         display: inline-block;
         flex:1;
         height: 50px;
         background: url('/imgs/icon-search.png') no-repeat center;
         background-size: 18px;
       }
      }

    }
  }
}
</style>
