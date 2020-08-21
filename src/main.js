import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store/index.js'
import VueCookie from  'vue-cookie'

import App from './App.vue'
 

// import baseURL from './util/env'
// const mock=true
// if(mock){
//   require('./mock/api')
// }

//根据前端跨域方式的不同来做调整
axios.defaults.baseURL="/api"
// axios.defaults.baseURL=baseURL
// console.log(baseURL,'baseurl')
// 如果跨域方式不是代理就用这种方式设置baseURL
axios.defaults.timeout=8000
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let res=response.data
  // console.log(res)
  let a=location.hash
  if(res.status==0){
    if(!res.data){
      return res.msg
    }else{
      return res.data
    }
    
  }else if(res.status==10){
    if(a!='#/index'){
      window.location.href="/#/login"
    }else{
      console.log(res.msg)
    }
    
  }else{
    alert(res.msg)
    return Promise.reject(res);
  }
 
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


Vue.use(VueAxios,axios)
Vue.use(VueLazyload,{
  loading: '/imgs/loading-svg/loading-bars.svg',
})


Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
