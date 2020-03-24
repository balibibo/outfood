import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store =  new Vuex.Store({

  // state： 每个vuex最核心的部分，数据仓库（用来存储所有交互数据
  state: {
    name: '奥利给',
    obj: { name: '嗷嗷', age: 25},

    shopData: {},  // 店铺信息数据
    shopListData: [],   // 商品信息数据
    ratingsData: [],   // 评价信息
    // shopCarInfo: [],   // 购物车
  },
  mutations: {    // 调用  store.commit('方法名', 参数)
    // 只有mutation 里的小韩说才可以直接改变state数据
    // 每一个mutation都会接收一个形参state，就指向上面的state

    changeName(state, name){
      state.name = name
    },
    // 修改state的shopData属性值的方法
    shopDataInfo(state, info) {
      state.shopData = info
    },
    shopListDataInfo(state, info) {
      state.shopListData = info
    },

    // 修改对应商品数量
    shopNum(state, dataObj){
      for(let typeObj of state.shopListData) {
        for(let food of typeObj.foods) {
          // 找到同名商品，改变数量
          if(food.name == dataObj.name){
            food.num += dataObj.val
          }
        }
      }
      
    }

  },
  // Vuex的计算属性   vue中的引用方法  this.$store.getters.xxx
  getters: {
    
    // 获取购物车数据， 只对商品做添加操作 已存在不会添加
    getshopCar(state) {
      let shopArr = [];
      let shopNames = [];
      for(let typeObj of state.shopListData) {
        for(let food of typeObj.foods) {

          // 购物车显示 数量大于0的商品
          if(food.num > 0) {
            // 如果 添加商品 或 增加数量，先判断购物车中是否存在 该商品
            // 将已有的商品过滤掉
            if(!shopNames.includes(food.name)){
              // 将购物车中不存在的商品添加进购物车，并记录
              shopArr.push(food)
              shopNames.push(food.name)
            }
          }
        }
      }
      return shopArr
    }
  },
  actions: {
  },
  modules: {
  }
})

// mutations 需要手动触发  参数1： 要触发的mutation的名称 参数2： 要传入的参数
store.commit('changeName', '老八秘制小憨包')
// 取值
console.log(store.state.name)

export default store