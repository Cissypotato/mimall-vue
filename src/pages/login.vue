<template>
  <div class="login">
    <div class="container">
      <img src="/imgs/login-logo.png" alt class="header-logo" />
    </div>
    <div class="main">
      <div class="container">
        <div class="form">
          <div class="title">
            <span :class="loginType?'':'active'" @click="changeLoginType(0)">账号登录</span>
            <span class="line">|</span>
            <span :class="loginType?'active':''" @click="changeLoginType(1)">马上注册</span>
          </div>
          <div class="form-body">
            <input type="text" v-model="username" placeholder="用户名" />
            <input type="password" v-model="password" placeholder="密码" />
            <input type="email" v-if="loginType" v-model="email" placeholder="邮箱" />
            <div class="btn" v-if="loginType" @click="register">注册</div>
            <div class="btn" v-else @click="login">登录</div>
            <div class="form-info" v-if="!loginType">立即注册 | 忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div>
        简体
        <span>|</span>繁体
        <span>|</span>English
        <span>|</span>常见问题
        <span>|</span>隐私政策
      </div>
      <div>
        小米公司版权所有-京ICP备10046444-
        <span>|</span>京公网安备11010802020134号-京ICP证110507号
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      userId: "",
      loginType: false,
    };
  },
  methods: {
    changeLoginType(e) {
      if (this.loginType != e) this.loginType = !this.loginType;
    },
    login() {
      // console.log("login");
      // alert('login')
      let { username, password } = this;
      if(!username || !password){
        alert('请填写完整信息')
      }else{
        this.axios
        .post("/user/login", {
          username,
          password,
        })
        .then((res) => {
          this.$cookie.set('userId', res.id, { expires: '1M' });
          console.log(res);
          // this.$router.push('/index')
        });
      }
      
    },
    register() {
      let { username, password, email } = this;
      if(!username || !password || !email){
        alert('请填写完整信息')
      }else{
         this.axios
        .post("/user/register", {
          username,
          password,
          email,
        })
        .then((res) => {
          console.log(res);
          if (res) {
            alert(res);
            this.loginType == false;
          }
        });
      }
     
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.login {
  .header-logo {
    height: 10.37vh;
    vertical-align: middle;
  }
  .main {
    height: 53.33vh;
    background: url("/imgs/login-bg.jpg") no-repeat center;
    background-size: cover;
    .container {
      height: 100%;
      position: relative;
      .form {
        width: 21.38vw;
        height: 47.22vh;
        background: #fff;
        position: absolute;
        top: 3.43vh;
        right: 0;
        padding: 2rem;
        > .title {
          display: inline-flex;
          width: 100%;
          justify-content: space-around;
          font-size: 1.5rem;
          span.line {
            color: $colorF;
          }
          span.active {
            color: $colorA;
          }
        }
        .form-body {
          margin-top: 3rem;
          input {
            display: inline-block;
            width: 100%;
            height: 3rem;
            padding: 0 2rem;
            margin-bottom: 1.5rem;
            border: 1px solid $colorH;
          }
          > .btn {
            width: 100%;
          }
          .form-info {
            font-size: 0.875rem;
            text-align: end;
            color: $colorD;
            cursor: pointer;
            margin-top: 0.8rem;
          }
        }
      }
    }
  }
  > footer {
    position: fixed;
    bottom: 8.611vh;
    width: 100%;
    left: 0;
    > div {
      text-align: center;
      font-size: 0.875rem;
      color: #333;
      line-height: 2rem;
      > span {
        display: inline-block;
        margin: 0 10px;
      }
    }
  }
}
</style>