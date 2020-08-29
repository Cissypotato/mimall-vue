
<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </order-header>
     <router-view></router-view>
     <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import orderHeader from '../components/OrderHeader'
import ServiceBar from "../components/ServiceBar";
import navFooter from '../components/NavFooter'
export default {
  name:'order',
  components:{
    orderHeader,
    navFooter,
    ServiceBar
  },
  data(){
    return {
      title:'',
      tip:''
    }
  },
  mounted(){
    this.getPath()
  },
  methods:{
    getPath(){
      let path= this.$route.path

      if(path=='/order/confirm'){
        this.title="确认订单"
        this.tip="请认真填写地址"
      }else if(path=="/order/orderList"){
        this.title="订单列表"
        this.tip="请谨防钓鱼链接或诈骗电话，了解更多>"
      }else if(path=="/order/orderPay"){
        this.title="订单支付"
        this.tip="请谨防钓鱼链接或诈骗电话，了解更多>"
      }else{
        this.title="订单支付"
        this.tip="请谨防钓鱼链接或诈骗电话，了解更多>"
      }
    }
  }
  
}
</script>