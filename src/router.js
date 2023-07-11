import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
Vue.use(VueRouter);
const routes = [    
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
]
const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",//基础路径
    routes
})
 
export default router