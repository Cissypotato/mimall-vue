import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyload from 'vue-lazyload'
 

// import baseURL from './util/env'
const mock=true
if(mock){
  require('./mock/api')
}

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
  if(res.status==0){
    return res.data
  }else if(res.status==10){
    window.location.href="/#/login"
  }else{
    alert(res.msg)
  }
 
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


Vue.use(VueAxios,axios)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: '',
  loading: 'imgs/loading-svg/loading-cube.svg',
  attempt: 1
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
