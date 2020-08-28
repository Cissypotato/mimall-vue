
<template>
  <div class="order-confirm">
   <div class="container">
      <div class="address-wrapper">
       <div class="title">收货地址</div>
       <div class="item-wrapper" >
       <div class="item" v-for="(item,index) in addressList" :class="{'checked':index==checkedIndex}" @click="checkedIndex=index" :key="item.id">
          <div class="name">
          {{item.receiverName}}
          </div>
           <div class="address">
            {{item.receiverMobile}}<br>
            {{item.receiverProvince +"  "+item.receiverCity +"  "+item.receiverDistrict +"  "+item.receiverAddress}}
          </div>
          <div class="icon-wrapper">
           <span class="del" @click="delAdress(item)"></span>
           <span class="edit" @click="EditAddressModal(item)"></span>
          </div>
        </div>
        <div class="item add-address" @click="openAddressModal">
          <div class="icon">
          <span></span>
          </div>
          <div class="word">添加新地址</div>
        </div>
       </div>
      </div>
      <div class="good-wrapper">
        <div class="h2">商品</div>
        
        <div class="good-item" v-for="item in productList" :key="item.productId">
          <div class="name">
            <img :src="item.productMainImage" alt="">
            {{item.productName}} {{item.productSubtitle}}
          </div>
          <div class="price-wrapper">
            <span class="price">{{item.productPrice}}元 x {{item.quantity}}</span>
            <span class="total">{{item.productTotalPrice}} 元 </span>
          </div>
        </div>
      </div>
      <div class="info-wrapper">
        <div class="info-item-l">
          <span class="title">配送方式</span> <span class="intro">包邮</span>
        </div>
        <div class="info-item-l">
          <span class="title">发票</span> <span class="intro">电子发票 个人 商品明细</span>
        </div>
        <div class="info-item">
          <span class="title">商品件数：</span> <span class="intro">         {{count}}件</span>
        </div>
        <div class="info-item">
          <span class="title">商品总价：</span> <span class="intro">      {{totalPrice}}元</span>
        </div>
        <div class="info-item">
          <span class="title">优惠活动：</span> <span class="intro"> 0元</span>
        </div>
          <div class="info-item">
            <span class="title">运费：   </span> <span class="intro"> 0元</span>
          </div>
          <div class="info-item">
            <span class="title">应付总额： </span> <span class="intro"> <span class=" total"> {{totalPrice}}</span>元 </span>
          </div>
      </div>
      <div class="btn-wrapper">
       <a class="btn btn-small btn-1" href="/#/cart">返回购物车</a>
       <div class="btn btn-small" @click="orderSubmit">去结算</div>
      </div>
   </div>
    <modal 
    title="新增地址"
    btnType=1
    :showModal="showEditModal"
    @cancel="showEditModal=false"
    @submit="submitAddress"
   >
    <template v-slot:body>
      <div class="edit-wrap">
        <div class="item">
          <input type="text" class="input" placeholder="姓名" v-model="checkedItem.receiverName">
          <input type="text" class="input" placeholder="手机号码" v-model="checkedItem.receiverMobile">
        </div>
        <div class="item">
          <select name="province" id="" v-model="checkedItem.receiverProvince">
            <option value="">请选择省份</option>
           <option value="四川">四川</option>
           <option value="云南">云南</option>
           <option value="贵州">贵州</option>
          </select>
           <select name="city" id="" v-model="checkedItem.receiverCity">
           <option value="">请选择城市</option>
           <option value="成都">成都</option>
           <option value="昆明">昆明</option>
           <option value="贵阳">贵阳</option>
          </select>
           <select name="district" id="" v-model="checkedItem.receiverDistrict">
           <option value="">请选择地区</option>
           <option value="青羊区">青羊区</option>
           <option value="锦江区">锦江区</option>
           <option value="锦江区">武侯区</option>
          </select>

        </div>
        <div class="item">
          <textarea name="street"   placeholder="详细地址" v-model="checkedItem.receiverAddress"></textarea>
        </div>
        <div class="item">
        <input type="text" class="input" placeholder="邮编" v-model="checkedItem.receiverZip">
        </div>
      </div>
    </template>
   
   </modal>
   <modal 
    title="确认删除"
    btnType=1
    :showModal="showDelModal"
    @cancel="showDelModal=false"
    @submit="submitAddress"
   >
    <template v-slot:body>
      <div>
        您确定删除此地址吗
      </div>
    </template>
   
   </modal>
  </div>
</template>

<script>
 import Modal from '../components/Modal'
 import { Message} from 'element-ui';
export default {
  name:"orderCofirm",
  data(){
    return{
      addressList:[],
      productList:[],
      totalPrice:0,
      count:0,
      checkedItem:{},
      userAction:'',//0:新增，1编辑，2删除
      showDelModal:false,
      showEditModal:false,
      checkedIndex:0,//当前收货地址
    }
  },
  components:{
    Modal
  },
  mounted(){
    this.getAddressList()
    this.getproductList()
  },
  methods:{
    getAddressList(){
      this.axios.get('/shippings').then(res=>{
        this.addressList=res.list
      })
    },
    openAddressModal(){
      this.showEditModal=true
       this.checkedItem={}
      this.userAction=0
    },
    EditAddressModal(item){
      console.log(1)
      this.showEditModal=true
      this.checkedItem=item
      this.userAction=1
    },
    delAdress(item){
      this.checkedItem=item
      this.userAction=2
      this.showDelModal=true
    },
    submitAddress(){
      let {checkedItem,userAction}=this
      let method,url,params
      if(userAction==0){
        method='post',url='/shippings'
      }else if(userAction==1){
        method='put',url=`/shippings/${checkedItem.id}`
      }else{
        method='delete',url=`/shippings/${checkedItem.id}`
      }
      if(userAction==0 || userAction==1){
        let {receiverName,receiverPhone, receiverMobile,receiverProvince,receiverCity,receiverDistrict,
          receiverAddress,receiverZip} =checkedItem
        let errMsg
          if(!receiverName){
            errMsg="请填写姓名"
          }else if(!receiverMobile||!(/^1[3-9]\d{9}$/.test(receiverMobile))){
            console.log(receiverPhone)
            errMsg="请填写正确的电话号码"
          }else if(!receiverProvince||!receiverCity||!receiverDistrict||!receiverAddress){
            errMsg="请填写正确的地址"
          }else if(!/\d{6}/.test(receiverZip)){
            errMsg="请填写正确邮编"
          }
          if(errMsg){
            Message.error(errMsg)
            return
          }
        params={
          receiverName,
          receiverPhone:'010',
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        }

      }
      this.axios[method](url,params).then(()=>{
        this.closeModal()
        this.getAddressList()
        Message.success('操作成功')
      })
    },
    closeModal(){
      this.checkedItem={}
      this.userAction=''
      this.showDelModal=false
      this.showEditModal=false
    },
    orderSubmit(){
      let item=this.addressList[this.checkedIndex]
      if(!item){
        Message.error('请选择一个地址')
        return
      }
      this.axios.post(`/orders`,{
        shippingId:item.id
      }).then(res=>{
        this.$router.push({
          path:'/order/orderPay',
          query:{
            orderNo:res.orderNo
          }
        })
      })
      
    },
    getproductList(){
      this.axios.get('/carts').then(res=>{
        let list=res.cartProductVoList
        this.totalPrice=res.cartTotalPrice
        this.productList=list.filter(item=>item.productSelected)
        this.productList.map((item)=>{
          this.count+=item.quantity
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/btn.scss';
  .order-confirm{
    background: #e5e5e5;
    padding-top: 30px;
    padding-bottom: 200px;
    >.container{
      padding-left:63px;
      padding-right:40px;
      padding-bottom:90px;
      background: #fff;
      .info-wrapper{
        border-bottom: 1px solid #e5e5e5;
      }
      .address-wrapper{
        padding: 30px 0;
        .title{
          font-size: 20px;
          color: #343434;
        }
        .item-wrapper{
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          >.item{
            padding: 10px 20px;
            width: 270px;
            height: 180px;
            border: 1px solid #e5e5e5;
            margin-right: 10px;
            margin-bottom: 10px;
            &.checked{
              border: 1px solid #FF6700;
            }
            &:nth-child(4n){
              margin-right: 0;
            }
            >.name{
              margin-top: 10px;
              font-size: 16px;
            }
            >.address{
              margin-top: 16px;
            }
            >.icon-wrapper{
              margin-top: 30px;
              display: flex;
              justify-content: space-between;
              >.del{
                cursor: pointer;
                @include bgImg(22px,22px,'/imgs/icon-del.png')
              }
              >.edit{
                cursor: pointer;
                @include bgImg(22px,22px,'/imgs/edit.png')
              }
            }
            &.add-address{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              >.icon{
                width: 30px;
                height: 30px;
                background: #e5e5e5;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                >span{
                  @include bgImg(20px,20px,'/imgs/icon-add.png');
                }
              
              }
              >.word{
                margin-top: 10px;
                font-size: 14px;
                color: #a9a9a9;
              }
            }
          }
        }
       
      }
      .good-wrapper{
        >.h2{border-bottom:1px solid #e5e5e5;font-size: 22px;font-weight: bold;line-height: 50px;}
        // margin-top: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;
        .good-item{
          display: flex;
          align-items: center;
          height: 70px;
          >.name{
            display: flex;
            align-items: center;
            >img{
              width: 40px;
              margin-right: 10px;
            }
            height: 70px;
            font-size: 18px;
            width: 62%;
          }
          >.price-wrapper{
            width: 38%;
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            >.total{
              color: #FF6700;
            }
          }
        }

      }
      .info-wrapper{
        padding-bottom: 30px;
          .info-item-l{
            display: flex;
            height: 60px;
            align-items: center;
            >.title{  
              width: 150px;            
              font-size: 20px;
              font-weight: 500;
              color: #343434;
            }
            >.intro{  
              font-size: 16px;
              font-weight: bold;
              color: #FF6700;
            }
          }
          .info-item{
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #666666;
            line-height: 1.8em;
            >.title{  
              text-align: right;
              width: 92%;            
            }
            >.intro{  
              width: 6%;
              text-align: right;        
              color: #FF6700;
              >.total{
                font-size: 20px;
                font-weight: 600;
              }
            }
          }
      }
      .btn-wrapper{
        margin-top: 37px;
        text-align: right;
        .btn-1{
          display: inline-block;
          width:202px ;
          height:50px;
          line-height: 50px;
          font-size: 18px;
          border: 1px solid #e5e5e5;
          color: #9a9a9a;
          background: #fff;
          margin-right: 20px;
        }
      }
    }
    .edit-wrap{
      font-size: 14px;
      >.item{
        margin-bottom: 15px;
        >.input{
          display: inline-block;
          width: 283px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #e5e5e5;
          padding-left: 10px;
          &+.input{
            margin-left: 14px;
          }
        }
        select{
          height: 40px;
          line-height: 40px;
          border: 1px solid #e5e5e5;
          margin-right: 15px;
        }
        textarea{
          padding: 13px 15px;
          width: 100%;
          height: 62px;
          border: 1px solid #e5e5e5;
        }
      }
    }
  }
</style>
