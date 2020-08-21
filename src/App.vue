<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'

export default {
  name: 'App',
  data(){
    return{
    res:{}
    }
    
  },

  components: {
    
  },
  mounted(){
    this.getUser()
    this.getCartCount()
    // storage.setItem("name","cissy",'user')
    // // let b=storage.getStorage()
    // storage.deleteItem("name","user")
    // // console.log(b)
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res
    // })
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        console.log(res,1111)
      this.$store.dispatch('saveUsername',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        console.log(res,'cartCount')
        this.$store.dispatch('saveCartCount',res||0)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/btn.scss';

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
