<template>
    <div id="evaluate">
        <div class="score">
            <div class="score-left">
                <p>3.9</p>
                <p>综合评分</p>
                <p>高于周边商家69.2%</p>
            </div>
            <div class="score-right">
                <p>服务态度<img src="../assets/img/star24_on@2x.png" width="14px" alt=""><img src="../assets/img/star24_on@2x.png" width="14px" alt=""></p>
                <p>服务态度<img src="../assets/img/star24_on@2x.png" width="14px" alt=""></p>
                <p>送达时间<span>44分钟</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
#evaluate{
    .score{
        display: flex;
        padding: 14px 0px;
        color: #333;

        .score-left{
            text-align: center;
            width: 140px;
            border-right: 1px solid #ccc;

            p:first-child{
                font-size: 24px;
                color: #FE9900;
            }
            p:nth-child(2){
                font-size: 14px;
            }
            p:nth-child(3){
                font-size: 12px;
                color: #ccc;
            }
        }
        .score-right{
            margin-left: 20px;
            font-weight: bold;

            p{  
                display: flex;
                align-items: center;
            }
            p>img:first-child{
                margin-left: 10px;
            }

            p:not(:first-child){
                margin-top: 10px;
            }
            p:last-child{
                span{
                    margin-left: 10px;
                    color: #ccc;
                    font-weight: 400;
                }
            }

        }

    }

}
</style>