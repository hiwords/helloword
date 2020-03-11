import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const EMPTY = () => import('@/pages/layout/empty')
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
                path: 'setting',
                name: 'setting',
                meta:{
                    title: '设置',
                    icon: 'menu-data-center',
                    breadcrumb: true
                },
                component: EMPTY
            }
        ]
    }
]
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routesOpt
})