<template>
    <div id="merchant">
        <div class="merchant-main">
            <div class="mer-left">
                <p>粥品香坊（大运村）</p>
                <p>
                    <img src="../assets/img/star24_on@2x.png" width="14px" alt="">
                    <img src="../assets/img/star24_on@2x.png" width="14px" alt="">
                    <img src="../assets/img/star24_on@2x.png" width="14px" alt="">
                    <img src="../assets/img/star24_on@2x.png" width="14px" alt="">
                    <img src="../assets/img/star24_on@2x.png" width="14px" alt="">
                    <span>(661) </span>
                    <span>月售690单</span>
                </p>
            </div>
            <div class="mer-right">
                <p>爱心</p>
                <p>已收藏</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="mer-money">
            <div class="moneyl">
                <p>起送价</p>
                <p><span>20</span>元</p>
            </div>
            <div class="moneyc">
                <p>商家配送</p>
                <p><span>4</span>元</p>
            </div>
            <div class="moneyr">
                <p>平均配送时间</p>
                <p><span>39</span>分钟</p>
            </div>
        </div>
        <div class="public-line"></div>
        <!-- 公告 -->
        <div class="mer-main">
            <div class="mer-notice">
                <p class="mer-title">公告与活动</p>
                <p>{{this.$store.state.shopData.bulletin}}</p>
                <p>
                    <img src="../assets/img/decrease_3@2x.png" width="20px" alt="">
                    <span>在线支付满28减5，满50减10</span>
                </p>
                <p>
                    <img src="../assets/img/zhe.png" width="20px" alt="">
                    <span>单人精彩赛</span>
                </p>
                <p>
                    <img src="../assets/img/zhe.png" width="20px" alt="">
                    <span>清肺雪梨汤8折抢购</span>
                </p>
                <p>
                    <img src="../assets/img/te.png" width="20px" alt="">
                    <span>特价饮品八折抢购</span>
                </p>
                <p>
                    <img src="../assets/img/te.png" width="20px" alt="">
                    <span>单人特色套餐</span>
                </p>
                <p>
                    <img src="../assets/img/piao.png" width="20px" alt="">
                    <span>该商家支持开发票，请在下单时填写好发票抬头</span>
                </p>
                <p>
                    <img src="../assets/img/bao.png" width="20px" alt="">
                    <span>已加入“外卖保”计划，视频安全保障</span>
                </p>
            </div>
            
        </div>
        <div class="public-line"></div>
        <!-- 商家实景 -->
        <div class="mer-sj">
            <p class="mer-title">商家实景</p>
            <p>
                <img :src="index_Bg" width="105px" alt="">
                <img :src="index_Bg" width="105px" alt="">
                <img :src="index_Bg" width="105px" alt="">
            </p>
        </div>
        <div class="public-line"></div>
        <!-- 商家信息 -->
        <div class="mer-sjinfo">
            <p class="mer-title">商家信息</p>
            <p>该商家支持开发票，请在下单时填写好发票抬头</p>
            <p>品类：其他菜系，包子粥店</p>
            <p>地址：北京市昌平区回笼观西大街龙观置业大厦底商B座102单元1340</p>
            <p>营业时间：10:00 - 20:30</p>
        </div>
    </div>
</template>

<script>
import index_Bg from '../assets/img/index_Bg.jpg'
    export default {
        data() {
            return {
                index_Bg
            }
        }
    }
</script>

<style lang="less">
// 背景线
.public-line{
    height: 16px;
    background-color: #F4F5F7;
    border-top: 1px solid #E7E7E7;
    border-bottom: 1px solid #E7E7E7;
}
// 公共标题
.mer-title{
    font-size: 16px;
    color: #040E18;
}

#merchant{
    padding-bottom: 60px;

    .merchant-main{
        display: flex;
        padding: 14px 10px;

        .mer-left{
            width: 80%;
            height: auto;

            p:first-child{
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            p:nth-child(2){
                display: flex;
                align-items: center;
                margin-top: 4px;

                span{
                    margin-left: 10px;
                }

            }

        }
        .mer-right{
            flex: 1;
            text-align: center;
        }
    }

    .line{
        background: #D9DDE1;
        margin: 0px auto;
        margin-bottom: 14px;
        width: 90%;
        height: 1px;
        
    }
    .mer-money{
        display: flex;
        text-align: center;
        margin: 0px auto;

        div:not(:last-child){
            border-right: 1px solid #D9DDE1;
        }
        div{
            width: 33.333%;
            color: #ccc;

            p:last-child{
                color: #333;
                span{
                    font-size: 26px;
                }
            }
        }

    }
    .mer-main{
        padding: 16px;

        .mer-notice{

            p:nth-child(2){
                color: #F0514F;
                padding-left: 10px;
                line-height: 24px;
            }
            p:not(:first-child){
                padding: 12px;
                font-size: 16px;
                border-bottom: 1px solid #D9DDE1;

                img{
                    vertical-align: middle;
                }
                span{
                    margin-left: 10px;
                }
            }
        }
    }
    .mer-sj{
        padding: 16px;

        p:nth-child(2){
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

        }

    }
    .mer-sjinfo{
        padding: 16px;

        p:first-child{
            padding-bottom: 12px;
            border-bottom: 1px solid #D9DDE1;
        }
        p:not(:first-child){
            color: #040E18;
            padding: 12px;
            font-size: 16px;
            border-bottom: 1px solid #D9DDE1;
        }
    }
    
}



</style>