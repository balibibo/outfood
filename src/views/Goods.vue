<template>
    <div id="goods">
        <div class="goods-left">
            <!-- 滚动优化容器 -->
            <ul class="content">
                <ul>
                    <li v-for="(item, index) in shoplist" :key="item.id" @click="goodsl(index)" :class="{gsnm: true, gsl: curgoodsl==index}">
                        {{ item.name }}
                    </li>
                </ul>
            </ul>
        </div>
        <div class="goods-right">
            <!-- 滚动优化容器 -->            
            <ul class="content">
                <ul :id="i" v-for="(v, i) in shoplist" :key="i">
                    <li>{{v.name}}</li>
                    <li v-for="(v01, i01) in v.foods" :key="i01">
                        <div class="list-line">
                            <div class="list-img"><img src="../assets/img/index_Bg.jpg" width="80px" height="80px" alt=""></div>
                            <div class="list-main">
                                <p>{{v01.name}}</p>
                                <p>咸粥</p>
                                <p>月售1132份 好评率100%</p>
                                <p><span>￥24</span><span class="pc2">￥28</span>
                                <span class="btnup"><button id="btnl">-</button><span>1</span><button id="btnr">+</button></span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
import { getGoods } from '../api/api.js'
import BScroll from 'better-scroll'


    export default {
        data() {
            return {
                shoplist: {},
                curgoodsl: 0
            }
        },
        created() {
            getGoods().then((res) => {
                console.log(res.data.data)
                this.shoplist = res.data.data
            })
        },
        mounted() {
            // new BScroll(DOM节点, 滚动设置)
            new BScroll(document.querySelector('.goods-left'),{click: true});
            // 右侧 将对象挂载到this上！！！！！！！！！！！！！！！
            this.rightList = new BScroll(document.querySelector('.goods-right'),{click: true});
        },
        methods: {
            goodsl(index) {
                this.curgoodsl = index;

                // 滚动  querySelector不支持数字字符串ID
                // this.rightList.scrollToElement(document.querySelector(index))
                this.rightList.scrollToElement(document.getElementById(index),1000)
            }
        }
    }
</script>

<style lang="less">
li{
    list-style: none;
}
#goods{
    flex: 1;
    // height: 450px;
    background-color: #f4f5f7;
    display: flex;
    max-height: 400px;
    
    .goods-left{
        width: 100px;
        overflow: scroll;

        .gsnm{
            color: #333;
            font-size: 16px;
            height: 50px;
            display: flex;
            align-items: center;
            line-height: 18px;
            margin: 0px 16px;
        }
        .gsnm:not(:last-child){
            border-bottom: 1px solid #D9DDE1;
        }
        .gsl{
            background: #fff;
            margin: -1px 0px 0px;
            padding: 0px 16px;
            border: 0!important;
        }
    }
    .goods-right{
        flex: 1;
        overflow: scroll;

        ul>li:first-child{
            border-left: 2px solid #D9DDE1;
            padding: 3px 16px;
            font-size: 16px;
            color: #94999E;
        }
        ul>li:not(:first-child){
            background-color: #fff;
            padding: 16px 16px 0px 16px;
            
            // li内容div( 给到下划线)
            .list-line{
                display: flex;
                padding-bottom: 16px;
                border-bottom: 1px solid #D9DDE1;
                position: relative;

                .list-main{
                margin-left: 10px;
                }
                .list-main>p:first-child{
                    font-size: 18px;
                    color: #333;
                    font-weight: bold;
                }
                .list-main>p:nth-child(2),.list-main>p:nth-child(3){
                    font-size: 12px;
                    color: #94999E;
                }
                .list-main>p:nth-child(4){
                    span:first-child{
                        color: red;
                        align-items: center;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .pc2{
                        text-decoration: line-through;
                        color: #94999E;
                        margin-left: 6px;
                    }
                    .btnup{
                        display: flex;
                        align-items: center;
                        position: absolute;
                        right: 0px;
                        bottom: 10px;

                        #btnr{
                            height: 22px;
                            width: 22px;
                            border: 0;
                            background: #00a0dc;
                            border-radius: 11px;
                            color: #fff;
                            font-size: 20px;
                            line-height: 22px;
                        }
                        span{
                            margin: 0px 6px;
                        }
                        #btnl{
                            height: 22px;
                            width: 22px;
                            border: 2px solid #00a0dc;
                            background: #fff;
                            border-radius: 11px;
                            color: #00a0dc;
                            font-size: 20px;
                            line-height: 0px;
                        }
                    }
                    
                }
            }
        }
        ul>li:last-child{
            .list-line{
                border: 0;
            }
        }
    }
}

</style>