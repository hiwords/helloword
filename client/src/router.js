import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const EMPTY = () => import('@/pages/layout/empty')
const LAYOUT = () => import('@/pages/layout/layout')
let routesOpt = [
    {
        path: '/',
        meta: {
            title: '起始页'
        },
        // redirect: {name: 'welcome'},
        component: LAYOUT,
        children: [
            {
                path: 'roles/list',
                name: 'rolesList',
                meta:{
                    title: '角色',
                    icon: 'alibaba'
                },
                component: () => import("@/pages/roles/list")
            },
            {
                path: 'level/list',
                name: 'levelList',
                meta:{
                    title: '等级',
                    icon: 'sketch'
                },
                component: () => import("@/pages/level/list")
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