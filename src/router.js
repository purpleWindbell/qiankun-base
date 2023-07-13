/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-07-11 17:10:11
 * @LastEditTime: 2023-07-13 14:52:48
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
Vue.use(VueRouter);
const routes = [    
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    // 子系统路由注册
    {
        path: '/vue1-admin',
        name: 'vue1-admin',
        alwaysShow:true,
        hidden: false,
        children:[
        {
            path: 'firstPage1',
            name: 'FirstPage1',
            alwaysShow:true,
            hidden: false,
            meta:{ label: 'vue1' },
            type:'c'
        },
        {
            path: 'secondPage1',
            name: 'SecondPage1',
            alwaysShow:true,
            hidden: false,
            meta:{ label: 'vue1' },
            type:'c'
        },
        ]
    },
    {
        path: '/vue2-admin',
        name: 'vue2-admin',
        alwaysShow:true,
        hidden: false,
        children:[
        {
            path: 'firstPage2',
            name: 'FirstPage2',
            alwaysShow:true,
            hidden: false,
            meta:{ label: 'vue2' },
            type:'c'
        },
        {
            path: 'secondPage2',
            name: 'SecondPage2',
            alwaysShow:true,
            hidden: false,
            meta:{ label: 'vue2' },
            type:'c'
        },
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",//基础路径
    routes
})
 
export default router