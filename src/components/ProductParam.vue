<template>
<div class="product-param" :class="{'is-fixed':isFixed}">
    <div class="container">
        <div class="left">{{title}}</div>
        <div class="right">
            <span><a href="javascript:;">概述</a></span>
            <span>|</span>
            <span><a href="javascript:;">参数</a></span>
            <span>|</span>
            <span><a href="javascript:;">用户评价</a></span>
            <slot name="buy"></slot>
        </div>
    </div>

</div>
</template>

<script>
export default {
    props:{
        title:String
    },
    data() {
        return {
            isFixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.fixed)
    },
    destroyed() {
        window.removeListener('scroll', this.fixed, false)
    },
    methods: {
        fixed() {
            let isFixed = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 152 ? true : false
            this.isFixed = isFixed
        }
    }

}
</script>

<style lang="scss" scoped>
.product-param {
    background: #fff;
    border-top: 1px solid #e5e5e5;

    &.is-fixed {
        position: fixed;
        width: 100%;
        top: 0;
        box-shadow: 0 5px 5px #eee;
        z-index: 99;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        line-height: 70px;

        .left {
            font-size: 18px;
            font-weight: bold;
        }

        .right {
            span {
                margin-right: 11px;
                color: #999;
            }

            a {
                font-size: 14px;
                font-weight: bold;
                color: #666;
            }
        }
    }
}
</style>
