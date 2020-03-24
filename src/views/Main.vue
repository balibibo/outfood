<template>
    <div id="Main">
        <div id="main-bg" :style="{backgroundImage: 'url('+this.$store.state.shopData.avatar+')'}"></div>
            
        <div id="main-bgcolor">
            <div class="main">
                <div class="main-img">
                    <img :src="this.$store.state.shopData.avatar" width="80px" height="80px" alt="">
                </div>
                <div class="main-describe">
                    <p class="p1"><img src="../assets/img/brand@2x.png" height="24px" alt=""><span>{{this.$store.state.shopData.name}}</span></p>
                    <p class="p2">{{this.$store.state.shopData.description}}/{{this.$store.state.shopData.deliveryTime}}分钟送达</p>
                    <p class="p3"><img src="../assets/img/decrease_3@2x.png" height="18px" alt=""><span>在线支付满</span></p>
                </div>
            </div>
            <!-- 公告 -->
            <div class="notice"><img src="../assets/img/bulletin@2x.png" height="18px" alt=""><p>{{this.$store.state.shopData.bulletin}}</p></div>
        </div>

        <!-- 导航 -->
        <div id="indexNav">
            <router-link to="/Goods">商品</router-link>
            <router-link to="/Evaluate">评价</router-link>
            <router-link to="/Merchant">商家</router-link>
        </div>
        <router-view />

        <!-- 购物车组件 -->
        <transition name="slide-fade">
            <div id="shopCar" v-show="shopCarShow"><shopCar></shopCar></div>
        </transition>

        <!-- 底部信息 -->
        <div id="shop" @click="shopCarShow = !shopCarShow">
            <div class="shop-main">
                <!-- 购物图标 -->
                <div class="icon-bg"><span class="icon"><Icon type="ios-cart"></Icon></span></div>
                
                <div class="shop-info">
                    <span>￥ {{getSum}}</span>
                    <span>另需配送费￥{{this.$store.state.shopData.deliveryPrice}}元</span>
                </div>
                <button class="shop-btn">￥{{this.$store.state.shopData.minPrice}}起送</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getSeller } from '../api/api.js'
import shopCar from '../views/shopCar'

    export default {
        data() {
            return {
                shopCarShow: false   // 购物车显示隐藏
            }
        },
        // 在创建时请求到接口返回的参数
        created(){
            getSeller().then((res) => {
                // vue中使用
                // console.log(res.data.data)
                // this.indexData = res.data.data
                
                // Vuex 使用
                // 从 Vuex 中调属性修改
                this.$store.commit('shopDataInfo', res.data.data)

            })
        },
        components: {
            shopCar
        },
        computed: {
            getSum() {
                var sum = 0;
                this.$store.getters.getshopCar.map( v => {
                        sum += v.num*v.price
                })
                return sum;
            },
        }
    }
</script>

<style lang="less" scoped>
#indexNav{
    .navActive{
        color: red;
        // font-weight: bold;
    }
}
*{
    padding: 0;
    margin: 0;
}
#main-bg{
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    height: 148px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(5px);
}
#main-bgcolor{
    position: relative;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    overflow: hidden;
    .main{
        display: flex;
        margin: 20px 0px 16px 20px;
        .main-img{
            margin-right: 20px;
        }
        .main-describe{
            color: #fff;
            .p1{
                display: flex;
                align-items: center;
            }
            .p1>span{
                margin-left: 10px;
                font-size: 20px;
                font-weight: bold;
            }
            .p2{
                font-size: 16px;
                margin-top: 4px;
            }
            .p3{
                margin-top: 4px;
                font-size: 14px;
                img{
                    margin-right: 6px;
                    vertical-align: middle;
                }
            }
            

        }
    }
    // 公告
    .notice{
        display: flex;
        padding: 8px 14px;
        
        img{
            margin-right: 6px;
        }
        p{
            flex: 1;
            color: #fff;
            font-size: 14px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            height: 16px;
        }
    }
}

// 导航
#indexNav{
    display: flex;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #D9DDE1;
    a{
        font-size: 18px;
        color: #333;
    }
}

// 底部购物车
#shop{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;;
    width: 100%;
    background: #141c27;
    color: #939498;
    //   2b343b  939498

    .shop-main{
        position: relative;
        // 购物车图标
        .icon-bg{
            position: absolute;
            left: 14px;
            top: -10px;
            background: #141c27;
            padding: 8px;
            border-radius: 31px;

            .icon{
                background: #2b343b;
                display: inline-block;
                padding: 10px;
                border-radius: 23px;
                i{
                    font-size: 26px;
                }
            }
        }

        .shop-info{
            display: flex;
            align-items: center;
            padding: 10px;
            line-height: 30px;
            padding-left: 90px;
            span:nth-child(1){
                display: inline-block;
                border-right: 1px solid #939498;
                // padding-right: 20px;
                font-size: 20px;
                font-weight: bold;
                
                width: 66px;
            }
            span:nth-child(2){
                margin-left: 20px;
                font-size: 12px;
            }
        }

        .shop-btn{
            position: absolute;
            right: 0;
            top: 0;
            height: 50px;
            width: 100px;
            border: 0;
            background: #2b343b;
            color: #939498;
        }

        
    }
}


// 购物车板子

#shopCar{
    position: fixed;
    left: 0;
    bottom: 50px;
    background: #FAFAFA;
    width: 100%;
    height: 220px;
    
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(220px);
  opacity: 0;
}


</style>