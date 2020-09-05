
import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/home.vue"
import Index from "./pages/index.vue"
// import Product from "./pages/product.vue"
// import Detail from "./pages/detail.vue"
// import Cart from "./pages/cart.vue"
// import Login from "./pages/login.vue"
// import Order from "./pages/order.vue"
// import OrderList from "./pages/orderList.vue"
// import Confirm from "./pages/confirm.vue"
// import OrderPay from "./pages/orderPay.vue"
// import Alipay from "./pages/alipay.vue"


Vue.use(Router)

export default new Router({
  name:'router',
  routes:[
    {
      path:"/",
      name:"home",
      component:Home,
      redirect:"/index",
      children:[
        {
          path:'/index',
          name:"index",
          component:Index
        },
        {
          path:'/product/:id',
          name:"product",
          component:()=>import('./pages/product.vue')
        },
        {
          path:'/detail/:id',
          name:"detail",
          component:()=>import('./pages/detail.vue')
        }
      ]
    },

    {
      path:'/cart',
      name:'cart',
      component:()=>import('./pages/cart.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('./pages/login.vue')
    },
    {
      path:"/order",
      name:"order",
      component:()=>import('./pages/order.vue'),
      children:[
        {
          path:'orderList',
          name:"orderList",
          component:()=>import('./pages/orderList.vue')
        },
        {
          path:'orderPay',
          name:"orderPay",
          component:()=>import('./pages/orderPay.vue')
        },
        {
          path:'confirm',
          name:"confirm",
          component:()=>import('./pages/confirm.vue')
        },
        {
          path:'alipay',
          name:"alipay",
          component:()=>import('./pages/alipay.vue')
        }
      ]
    }
  ]
})
