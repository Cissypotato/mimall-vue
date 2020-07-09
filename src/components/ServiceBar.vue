<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li>
          <span class="icon1"></span>
          <a href="javascript:;">预约维修服务</a>
        </li>
        <li>
          <span class="icon2"></span>
          <a href="javascript:;">7天无理由退货</a>
        </li>
        <li>
          <span class="icon3"></span>
          <a href="javascript:;">15天免费换货</a>
        </li>
        <li>
          <span class="icon4"></span>
          <a href="javascript:;">满150元包邮</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.service-bar {
  padding: 30px 0;
  background: #fff;
  ul {
    width: 100%;
    display: flex;
    li {
      text-align: center;
      width: 24.9%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:not(:last-child){
        border-right: 1px solid #e5e5e5;
      }
      span {
        display: inline-block;
        margin-right:8px;
        line-height: 20px;

        // width: 20px;
        // height: 20px;
        
      }
      .icon1 {
          @include bgImg(18px, 18px, "/imgs/icon-setting.png", 20px);
        }
        .icon2 {
          @include bgImg(18px, 18px, "/imgs/icon-7day.png", 20px);
        }
        .icon3 {
          @include bgImg(18px, 18px, "/imgs/icon-15day.png", 20px);
        }
        .icon4 {
          @include bgImg(18px, 18px, "/imgs/icon-post.png", 20px);
        }
      a {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #6666;
      }
    }
  }
}
</style>
