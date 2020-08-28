<template>
    <transition name="slide">
         <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="main">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                 <a href="javascript:;" v-if="btnType==1" class="btn" v-on:click="$emit('submit')">{{confirmText}}</a>
                 <a href="javascript:;" v-else-if="btnType==2" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
                <div class="btn-group" v-else>
                    <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{confirmText}}</a>
                    <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
                </div>
               
            </div>
        </div>
    </div>
    </transition>
   
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
@import '../assets/scss/config.scss';
@import '../assets/scss/modal.scss';

</style>