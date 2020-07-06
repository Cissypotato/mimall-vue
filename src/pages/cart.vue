
<template>
  <div>
   cart
    <nav-header></nav-header>
   
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from '../components/NavHeader'
import navFooter from '../components/NavFooter'
export default {
  name:'cart',
  components:{
    navHeader,
    navFooter
  }
}
</script>