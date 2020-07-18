import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/children',
        name: 'children',
        component: () => import(/* webpackChunkName: "about" */ '../views/children.vue')
    }
]

//不再导出rouer实例而是导出路由数据
export default routes
