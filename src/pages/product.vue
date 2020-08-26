<template>
<div class="product">
    <ProductParam :title="product.name">
        <template v-slot:buy>
            <div class="btn btn-litle" @click="toBuy">立即购买</div>
        </template>
    </ProductParam>
    <div class="banner1">
        <div class="title">
            {{product.name}}
           
        </div>
        <div class="info">{{product.subtitle}}</div>
        <div class="tags">
            全球首款双频 GPS
            <span>|</span>骁龙845
            <span>|</span>AI 变焦双摄
            <span>|</span>红外人脸识别
        </div>
        <div class="price">
            <span class="real">
                <span>￥</span>{{product.price}}
            </span>
            <span class="fore">
                <span>￥</span>{{product.price+300}}
            </span>
        </div>
    </div>
    <div class="container">
        <img src="../../public/imgs/product/product-bg-2.png" alt srcset />
    </div>
    <div class="banner2">
        <img src="../../public/imgs/product/product-bg-3.png" alt srcset />
    </div>
    <div class="slider-box">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <img :src="item.img" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <div class="slider-title">小米8 AI变焦双摄拍摄</div>
    </div>
    <div class="video-box">
        <div class="intro">
            60帧超慢动作摄影
            <br />慢慢回味每一瞬间的精彩
        </div>
        <div class="info">
            后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
            <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </div>
        <div class="video-bg" @click="isSlide=true"></div>
        <div class="video-wrapper">
            <div class="overlay" v-if="isSlide"></div>
            <div class="video" :class="{'is-slide':isSlide}">
                <span class="icon-close" @click="isSlide=false"></span>
                <video src="/imgs/product/video.mp4" muted autoplay controls></video>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProductParam from "../components/ProductParam";
import {    swiper,    swiperSlide} from "vue-awesome-swiper";
export default {
    name: "product",
    components: {
        ProductParam,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            product:{},
            swiperOption: {
                autoplay: false,
                slidesPerView: 3,
                spaceBetween: 22,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            swiperList: [{
                    id: "45",
                    img: "/imgs/product/gallery-2.png",
                },
                {
                    id: "46",
                    img: "/imgs/product/gallery-3.png",
                },
                {
                    id: "",
                    img: "/imgs/product/gallery-4.png",
                },
                {
                    id: "",
                    img: "/imgs/product/gallery-5.jpg",
                },
                {
                    id: "",
                    img: "/imgs/product/gallery-6.jpg",
                },
            ],
            isSlide:false
        };
    },
    mounted(){
        this.getProductInfo()
    },
    methods:{
        getProductInfo(){
            let id =this.$route.params.id
            this.axios.get(`/products/${id}`).then((res)=>{
                // console.log(res)
                this.product=res
            })
        },
        toBuy(){
            let id =this.$route.params.id
            this.$router.push(`/detail/${id}`)
        }
    }
    
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/btn.scss";
@import "../assets/scss/mixin.scss";

.product {
    .banner1 {
        @include bgImg(100vw,
            718px,
            "../../public/imgs/product/product-bg-1.png",
            "cover"
        );

        >div {
            text-align: center;
            color: #333;
            font-weight: bold;
        }

        .title {
            font-size: 80px;
            margin-top: 50px;

            >.b {
                display: inline-block;
                margin-bottom: -12px;
                font-size: 99px;
                line-height: 120px;
                vertical-align: bottom;
            }
        }

        .info {
            font-size: 24px;
            letter-spacing: 0.6em;
            // margin-top: 50px;
        }

        .tags {
            font-size: 16px;
            margin-top: 10px;

            span {
                color: #bfab9d;
                margin: 0 15px;
            }
        }

        .price {
            // border: 1px solid pink;
            margin-top: 30px;

            .real {
                font-size: 38px;

                >span {
                    font-size: 30px;
                    margin-right: 2px;
                    margin-top: -4px;
                    display: inline-block;
                    vertical-align: top;
                }
            }

            .fore {
                font-size: 26px;
                text-decoration: line-through;
                margin-left: 11px;
            }
        }
    }

    >.container {
        img {
            width: 100%;
        }
    }

    .banner2 {
        img {
            width: 100%;
            vertical-align: middle;
        }
    }

    .slider-box {
        margin-top: 36px;
        position: relative;

        .swiper-container {
            width: 100%;

            .swiper-slide {
                img {
                    width: 100%;
                    vertical-align: middle;
                }
            }
        }

        .slider-title {
            text-align: center;
            font-size: 18px;
            color: #333;
            margin: 20px 0;
            line-height: 42px;
        }
    }

    .video-box {
        padding-top: 75px;
        width: 100%;
        height: 1144px;
        background: #070708;
        text-align: center;
        color: #fff;

        >.intro {
            line-height: 80px;
            font-size: 60px;
        }

        >.info {
            margin-top: 30px;
            font-size: 24px;
            line-height: 36px;
        }

        .video-bg {
            width: 1126px;
            height: 540px;
            margin: 50px auto 0;
            @include bgImg(1126px, 540px, "/imgs/product/gallery-1.png", "cover");
        }

        .video-wrapper {
            .overlay {
                @include position(fixed, 0, 0, 100vw, 100vh);
                background: #000;
                opacity: 0.3;
                z-index: 100;
            }
            
            .video {
                width: 1000px;
                height: 536px;
                position: fixed;
                top: -50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 100;
                opacity: 0;
                transition: all .6s;
                &.is-slide{
                    top:50%;
                    opacity: 1;
                }
                .icon-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    z-index: 101;
                    @include bgImg(20px, 20px, "/imgs/icon-close.png");
                    cursor: pointer;
                }

                video {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
