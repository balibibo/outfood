<template>
    <div id="goods">
        <div class="goods-left">
            <!-- 滚动优化容器 -->
            <ul class="content">
                <ul>
                    <li v-for="(item, index) in this.$store.state.shopListData" :key="item.id" @click="goodsl(index)" :class="{gsnm: true, gsl: curgoodsl==index}">
                        {{ item.name }}
                    </li>
                </ul>
            </ul>
        </div>
        <div class="goods-right">
            <!-- 滚动优化容器 -->            
            <ul class="content">
                <ul :id="i" v-for="(v, i) in this.$store.state.shopListData" :key="i">
                    <li>{{v.name}}</li>
                    <li v-for="(v01, i01) in v.foods" :key="i01">
                        <div class="list-line">
                            <div class="list-img"><img :src="v01.icon" width="80px" height="80px" alt=""></div>
                            <div class="list-main">
                                <p>{{v01.name}}</p>
                                <p class="oversl">{{v01.description}}</p>
                                <p>月售{{v01.sellCount}}份 好评率100%</p>
                                <p><span>￥{{v01.price}}</span><span class="pc2">{{v01.oldPrice==""?"":`￥${v01.oldPrice}`}}</span>
                                <span class="btnup">
                                    <button id="btnl" @click="btn(-1, v01.name)" v-show="v01.num>0">-</button>
                                    <span v-show="v01.num>0">{{v01.num}}</span>
                                    <button id="btnr" @click="btn(1, v01.name)">+</button>
                                </span>
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
                curgoodsl: 0,
            }
        },
        created() {
            getGoods().then((res) => {
                //  将接口数据放 到当前数据
                // console.log(res.data.data)
                // this.shoplist = res.data.data
                
                // Vuex
                this.$store.commit('shopListDataInfo', res.data.data)
                console.log(this.$store.state.shopListData)
            })
        },
        mounted() {
            // new BScroll(DOM节点, 滚动设置)
            new BScroll(document.querySelector('.goods-left'),{click: true});


            // 右侧 将对象挂载到this上！！！！！！！！！！！！！！！
            this.rightList = new BScroll(document.querySelector('.goods-right'),{
                click: true,
                probeType: 3  //  实时触发滚动事件
                });

            // 右链左
            // 监听scroll （滚动条事件） 参数为 （object，{x，y}）
            this.rightList.on('scroll', ( {y} ) => {    // {y} ===  obj.y  即对象中的y方法
                // abs取正整数
                let _y = Math.abs(y)
                // console.log(this.getNav,_y)

                //  不适用计算属性会大量耗费计算资源
                /* console.log(_y)
                if(_y >=0 && _y < 1286){
                    this.curgoodsl = 0;
                } else if(_y >=1286 && _y < 1438){
                    this.curgoodsl = 1;
                } */

                // 适用计算属性优化后
                // 将计算属性返回的值保存
                let Hdata = this.getNav;

                for(let j=0;j<Hdata.length;j++){
                    if(_y >= Hdata[j].min && _y < Hdata[j].max) {
                            this.curgoodsl = Hdata[j].index
                    }
                }
            })

        },
        methods: {
            // 获取对应索引       做   左链右
            goodsl(index) {
                this.curgoodsl = index;

                // 滚动  querySelector不支持数字字符串ID
                // this.rightList.scrollToElement(document.querySelector(index))
                this.rightList.scrollToElement(document.getElementById(index),1000)
            },

            //  商品数量计算
            btn(val, name){
                // 调用vuex 计算商品数量方法
                this.$store.commit('shopNum', {name, val})

            }
        },
        // 计算属性会进行运算结果缓存    无论去多少次，只要数据无变化，都是取第一次运算完的缓存结果
        // 计算属性 因为是属性，所以无法传值  计算属性必须有return  不能作为事件句柄去绑定
        // 计算属性不需要再data里声明，用的时候直接 this.xxx
        computed: {
            // 右链左  最大高度和最小高度获取
            getNav() {
                let arr = []
                let ah = 0
                for(let i=0; i < this.$store.state.shopListData.length; i++){
                    // 取每个模块对应高度  通过id
                    let ulH = document.getElementById(i).offsetHeight
                    // 拿到当前模块的最小和最大高度位置，以及对应的id模块
                    arr.push({min: ah, max: ah+ulH, index: i})

                    // 将高度累加 作为下一次的最小高度
                    ah += ulH;
                }

                return arr;
            }
        }
    }
</script>

<style lang="less">
li{
    list-style: none;
}

// 取消 button 点击时的边框效果
button:focus {outline:none;}

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
                    flex: 1;
                    margin-left: 10px;
                    .oversl{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 90%;
                    }
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
                            width: 16px;
                            text-align: center;
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