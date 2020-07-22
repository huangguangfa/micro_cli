import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
    },
    {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "role" */ '../views/role.vue')
    }
]

//不再导出rouer实例而是导出路由数据
export default routes
