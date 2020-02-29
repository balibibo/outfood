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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
#merchant{

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
}



</style>