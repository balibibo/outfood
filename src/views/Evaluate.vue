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
        <!-- 背景线 -->
        <div class="evaluate-line"></div>
        <!-- 评价导航 -->
        <div class="evaluate-nav">
            <button>全部<span>57</span></button>
            <button>满意<span>47</span></button>
            <button>不满意<span>10</span></button>
        </div>
        <div class="evaluate-title">
            <p><Icon type="checkmark-circled"></Icon>只看有内容的评价</p>
        </div>
        <div class="evaluate-info" v-for="(v, i) in this.$store.state.ratingsData" :key="i">
            <div class="evaInfo-img">
                <img src="../assets/img/index_Bg.jpg" width="40px" height="40px" alt="">
            </div>
            <div class="evaInfo-info">
                <p>{{v.username}}<span>{{getRateTime(i)}}</span></p>
                <p>
                    <img v-show="v.score>=1" src="../assets/img/star24_on@2x.png" width='10px' alt="">
                    <img v-show="v.score>=2" src="../assets/img/star24_on@2x.png" width='10px' alt="">
                    <img v-show="v.score>=3" src="../assets/img/star24_on@2x.png" width='10px' alt="">
                    <img v-show="v.score>=4" src="../assets/img/star24_on@2x.png" width='10px' alt="">
                    <img v-show="v.score>=5" src="../assets/img/star24_on@2x.png" width='10px' alt="">
                    <span> {{v.deliveryTime==""?"":(v.deliveryTime)+'分钟送达'}}</span></p>
                <p>{{v.text==""?'无评论':v.text}}</p>
                <p>
                    {{v.rateType==0?'好评':'差评'}}
                    <button v-for="(v01, i01) in v.recommend" :key="i01">{{v01}}</button>
                    </p>
            </div>
        </div>
    </div>
</template>

<script>
import {getRatings} from '../api/api.js'

    export default {
        data() {
            return {}
        },
        created() {
            getRatings().then( res => {
                this.$store.state.ratingsData = res.data.data
                // console.log(res.data.data)
            })
        },
        methods: {
            getRateTime(index) {
                var date = new Date(this.$store.state.ratingsData[index].rateTime);
                var    Y = date.getFullYear() + '-';
                var    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var    D = date.getDate() + ' ';
                var    h = date.getHours() + ':';
                var    m = date.getMinutes() + ':';
                var    s = date.getSeconds();
                return Y+M+D+h+m+s;
            }
        }
    }
</script>

<style lang="less" scoped>
#evaluate{
    padding-bottom: 50px;

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

    // 背景线
    .evaluate-line{
        height: 16px;
        background-color: #F4F5F7;
        border-top: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
    }

    // 评价导航
    .evaluate-nav{
        margin: 16px 16px 0px;
        padding-bottom: 16px;
        border-bottom: 1px solid #E7E7E7;
        button{
            padding: 8px 12px;
            border: 0;
            font-size: 16px;

            span{
                font-size: 12px;
                margin-left: 2px;
            }
        }
        button:first-child{
            color: #fff;
            background: #00A0DC;
        }
        button:nth-child(2){
            color: #5C6369;
            background-color: #CCECF7;
            
        }
        button:nth-child(3){
            color: #5C6369;
            background-color: #EAEBED;
            
        }
        button:not(:first-child){
            margin-left: 10px;
        }
    }
    .evaluate-title{
        color: #A9ABAF;
        padding: 8px 16px;
        border-bottom: 2px solid #E7E7E7;
        
        p{
            font-size: 16px;
            margin-left: 6px;
        }
    }
    .evaluate-info{
        margin: 0px 20px;
        padding: 14px 0px;
        display: flex;
        border-bottom: 1px solid #E7E7E7;

        .evaInfo-img{
            img{
                border-radius: 20px;
            }
        }
        .evaInfo-info{
            flex: 1;
            margin-left: 10px;
            p:first-child{
                font-size: 14px;
                color: #0A1119;
                display: flex;
                justify-content: space-between;
                span{
                    color: #C4C7C9;
                }
            }
            p:nth-child(2){
                color: #C4C7C9;
            }
            p:nth-child(3){
                color: #0A1119;
                font-size: 16px;
                margin: 6px 0px 2px;
            }
            p:nth-child(4){
                font-size: 12px;
                button{
                    margin: 4px;
                    margin-right: 6px;
                    border: 1px solid #E7E7E7;
                    background-color: #fff;
                    padding: 0px 4px;
                    color: #C4C7C9;
                    width: 80px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                button:first-child{
                    margin-left: 10px;
                }
            }
        }


    }

}
</style>