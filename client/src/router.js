import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const EMPTY = () => import('@/pages/layout/empty')
const LAYOUT = () => import('@/pages/layout/layout')
let routesOpt = [
    {
        path: '/',
        meta: {
            title: '菜单栏路由'
        },
        component: LAYOUT,
        children: [
            {
                path: 'list',
                name: 'rolesList',
                meta:{
                    title: '列表',
                    icon: 'alibaba'
                },
                component: () => import("@/pages/roles/list")
            },
            {
                path: 'setting',
                name: 'baseSetting',
                meta:{
                    title: '基础设置',
                    icon: 'setting',
                    breadcrumb: true
                },
                component: () => import("@/pages/setting/setting")
            },
        ]
    }
]
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routesOpt
})