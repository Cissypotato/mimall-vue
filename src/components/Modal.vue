<template>
    <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="main">
            <div class="modal-header">
                <span>标题</span>
                <a href="javascript:;" class="icon-close"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn">{{confirmText}}</a>
                <a href="javascript:;" class="btn">{{cancelText}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'modal',
    props:{
        //弹框类型：small，middle，large，form
        modalType:{
            type:String,
            default:'form'
        },
        title:String,
        //底部按钮：1确定，2取消，3确定取消
        btnType:String,
        confirmText:{
            type:String,
            default:"确定"
        },
        cancelText:{
            type:String,
            default:"取消"
        },
        showModal:Boolean
        

    }

}
</script>
<style lang="scss">

</style>