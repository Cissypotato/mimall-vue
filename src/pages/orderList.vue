<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话</span>
      </template>
    </order-header>
    <div class="container">
      <loading v-if="loading"></loading>
      <div class="item" v-for="(order,index) in orderList" :key="index">
        <div class="top">
          <div class="info">
            <!--2019年10月10日 19:20-->
            {{order.createTime}}
            <span>|</span>
            {{order.receiverName}}
            <span>|</span>
            订单号：{{order.orderNo}}
            <span>|</span>
            {{order.paymentTypeDesc}}
          </div>
          <div class="price">
            应付金额：
            <span>{{order.payment}}</span>元
          </div>
        </div>
        <div class="main">
          <div class="product-wrap">
            <div class="product-item" v-for="(item,index) in order.orderItemVoList" :key="index">
              <div class="img">
                <img v-lazy="item.productImage" alt />
              </div>
              <div class="title">
                <!--Redmi Note 8 4GB+64GB 皓月白 64GB-->
                {{item.productName}}
                <br />
                {{item.currentUnitPrice}}元 X {{item.quantity}}
              </div>
            </div>
          </div>

          <div class="pay" v-if="order.status==10" @click="toPay(order.orderNo)">
            {{order.statusDesc}}
            <a href>></a>
          </div>
          <div class="pay" v-else>{{order.statusDesc}}</div>
        </div>
      </div>
      <no-data v-if="!loading && orderList.length==0"></no-data>
      <el-pagination
        class="pagination"
        background
        :pageSize="pageSize"
        layout="prev, pager, next"
        :total="pageTotal"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import orderHeader from "../components/OrderHeader";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import { Pagination } from "element-ui";
export default {
  name: "orderList",
  components: {
    orderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      loading: true,
      orderList: [],
      pageSize: 10,
      pageTotal: 0,
      currentPage: 1,
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.axios
        .get("/orders", {
          params: {
            pageNum: this.currentPage,
          },
        })
        .then((res) => {
          console.log(res.total);
          this.loading = false;
          this.orderList = res.list;
          this.pageTotal = res.total;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handlePageChange(pageNum) {
      this.currentPage = pageNum;
      this.getOrderList();
    },
    abc() {
      console.log(2);
    },
    toPay(orderNo) {
      this.$router.push({
        path: "/order/orderPay",
        query: {
          orderNo,
        },
      });
    },
  },
};
</script>

<style lang="scss" >
.order-list {
  background: #f5f5f5;
  > .container {
    padding-bottom: 110px;
    > .item {
      margin-top: 33px;
      background: #fff;

      > .top {
        padding: 0 43px;
        background: #fffaf7;
        font-size: 16px;
        color: #666666;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > .info {
          > span {
            margin: 0 9px;
            color: #e5e5e5;
          }
        }
        > .price {
          > span {
            color: #333;
            font-size: 24px;
          }
        }
      }
      > .main {
        // border: 1px solid red;

        padding: 0 43px;
        display: flex;
        align-items: center;
        .product-wrap {
          flex: 1;
          .product-item {
            // border: 1px solid green;
            margin-top: 24px;
            margin-bottom: 20px;
            display: flex;
            > .img {
              > img {
                width: 74px;
                margin-right: 45px;
              }
            }
            > .title {
              flex: 1;
              font-size: 20px;
              color: #333;
              font-weight: 500;
              line-height: 30px;
            }
          }
        }

        .pay {
          width: 20%;
          color: #ff6600;
          font-size: 20px;
          font-weight: 600;
          text-align: right;
          > a {
            color: #ff6600;
          }
        }
      }
    }
    .pagination {
      text-align: right;
      margin-top: 20px;
    }
    // .el-pagination.is-background .el-pager li:not(.disabled).active{
    //     background-color: #ff6600;
    //     color: #fff;
    //   }
  

  }
}
</style>
