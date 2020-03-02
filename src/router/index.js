import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/Goods', // 默认路由设置
    children: [
      {path: '/Goods', name: 'Goods', component: () => import('../views/Goods.vue')},
      {path: '/Evaluate', name: 'Evaluate', component: () => import('../views/Evaluate.vue')},
      {path: '/Merchant', name: 'Merchant', component: () => import('../views/Merchant.vue')},
    ]
  },
  
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'navActive'   // active为路由激活时动态添加的类，类名可以自定义
})

export default router
