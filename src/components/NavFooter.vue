<template>
  <div class="footer">
    <div class="top">
      <img src="/imgs/logo-mi.png" alt="" srcset="">
      <p>小米商城</p>
    </div>
    <div class="bottom">
      <div class="link">
        <a href="javascript:;">cissy的主页</a> <span>|</span> 
       <a href="javascript:;"> Vue全栈课程 </a><span>|</span>
        <a href="javascript:;">小程序</a><span> | </span>
        <a href="javascript:;">webpack </a>
        </div>
      <div class="copyright">Copyright©2020 <span>mi.5pure.com</span> All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"nav-footer"
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
  .footer{
    height: 234px;
    background: #333;
    border-top: 4px solid $colorA;
    color: #999;
    font-size: 16px;
    text-align: center;
    .top{
      padding: 40px 0 20px;
      img{width:53px}

    }
    .bottom{
      
      line-height: 1.8em;
      .link{
        a{color: #999;}
        span{margin: 0 10px;}
      }
      .copyright{
        span{color: $colorA;}
      }
      
    }
  }
</style>
