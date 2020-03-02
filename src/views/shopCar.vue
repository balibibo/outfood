<template>
    <div>
        <p class="shopCarTitle">购物车</p>
        <div class="shopH">
            <div v-for="(v, i) in this.$store.state.shopListData" :key="i">
                <div v-show="v01.num>0" class="shopCarInfo" v-for="(v01, i01) in v.foods" :key="i01">
                    <p class="shopNameInfo">
                        <img :src="v01.icon" width="50px" alt="">
                        <span>{{v01.name}}</span>
                        </p>
                    <div class="shopCar-cz">
                        <button class="car-btnl" @click="btn(-1, i, i01)" >-</button>
                        <span>{{v01.num}}</span>
                        <button class="car-btnr" @click="btn(1, i, i01)">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        methods: {
            //  商品数量计算
            // 这里遍历 foods  每一种foods 在一个div中 判断当前foods 数量为0时隐藏
            btn(num, listI, foodsI){
                // console.log(this.$store.state.shopListData[listI].foods[foodsI].num)
                this.$store.state.shopListData[listI].foods[foodsI].num+=num
                //收集当前商品信息
                console.log(this.$store.state.shopListData[listI].foods[foodsI])
                // this.$store.commit('shopCarPush', this.$store.state.shopListData[listI].foods[foodsI])
                // 当前选中商品
                // console.log(this.$store.state.shopCarInfo)

                if(this.$store.state.shopListData[listI].foods[foodsI].num<=0){
                    this.$store.state.shopListData[listI].foods[foodsI].num = 0
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.shopH{
    overflow: scroll;
    height: 180px;
}
.shopCarTitle{
        background-color: cornsilk;
        color: crimson;
        font-size: 16px;
        padding: 10px;
    }
.shopCarInfo{
    padding: 16px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;

    .shopNameInfo{
        
        span{
            font-size: 16px;
            font-weight: bold;
            color: #000000;
            margin-left: 10px;
        }
        img{
            vertical-align: middle;
        }
    }

    .shopCar-cz{

        .car-btnl{
            height: 22px;
            width: 22px;
            border: 2px solid #00a0dc;
            background: #fff;
            border-radius: 11px;
            color: #00a0dc;
            font-size: 20px;
            line-height: 0px;
        }
        span{
            display: inline-block;
            margin: 0px 6px;
            width: 24px;
            text-align: center;
            font-size: 16px;
        }
        .car-btnr{
            height: 22px;
            width: 22px;
            border: 0;
            background: #00a0dc;
            border-radius: 11px;
            color: #fff;
            font-size: 20px;
            line-height: 22px;
        }
    }

}


</style>