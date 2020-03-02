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
    /* shopCarPush(state, dataObj){
      state.shopCarInfo.push(dataObj)
      // 去重
    } */

  },
  // Vuex的计算属性   vue中的引用方法  this.$store.getters.xxx
  getters: {
    getSum(state) {
      var sum = 0;
      var dj = 0;
      state.shopListData.map( items => {
          items.foods.forEach(v => {
              dj = v.num*v.price
              sum += dj
          });
      })
      return sum;
    },
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