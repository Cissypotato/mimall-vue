
<template>
  <div class="alipay">
     <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话</span>
      </template>
    </order-header>
   <div v-html="content"></div>
   <loading> </loading>
  </div>
</template>

<script>
import orderHeader from '../components/OrderHeader'
import Loading from '../components/Loading'
export default {
  name:"alipay",
  components:{
    Loading,
    orderHeader

  },
  data(){
    return{
      orderId:this.$route.query.orderId,
      content:''
    }
  },
  mounted(){
    this.getPay()
  },
  methods:{
    getPay(){
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName:'vue2高仿小米商城', //扫码支付时订单名称
        amount:0.01, //单位元
        payType :1//1支付宝，2微信
      }).then(res=>{
        this.content=res.content
        setTimeout(()=>{
          document.forms[0].submit()
        },100)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
