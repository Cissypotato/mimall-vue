<template>
    <div class="no-data">
        <img src="/imgs/icon-no-data.png" alt="">
        <p>暂无订单记录</p>
    </div>
</template>
<script>
export default {
    name:'no-data'
}
</script>

<style lang="scss" scoped>
 .no-data{
     text-align: center;
     margin: 50px 0;
     color: #999;
     font-size: 20px;
     img{
         width: 240px;
         height: 180px;
         margin-bottom: 30px;
     }
 }
</style>