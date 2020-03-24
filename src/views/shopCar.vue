<template>
    <div>
        <p class="shopCarTitle">购物车</p>
        <div class="shopH">
            <div class="shopCarInfo" v-for="(v, i) in this.$store.getters.getshopCar" :key="i">
                <p class="shopNameInfo">
                    <img :src="v.icon" width="50px" alt="">
                    <span>{{v.name}}</span>
                    </p>
                <div class="shopCar-cz">
                    <button class="car-btnl" @click="btn(-1, v.name)" >-</button>
                    <span>{{v.num}}</span>
                    <button class="car-btnr" @click="btn(1, v.name)">+</button>
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
            btn(val, name){
                
                this.$store.commit('shopNum', {name, val})

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