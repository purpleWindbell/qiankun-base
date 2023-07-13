/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-07-11 17:10:11
 * @LastEditTime: 2023-07-13 14:47:40
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'
// import less from 'less';
// import Vuex from 'vuex';
 window.b = 3
// 引入乾坤
import { registerMicroApps, start } from 'qiankun';
// import store from './store/store'
 
Vue.use(ElementUI)
// Vue.use(less)
// Vue.use(Vuex)
Vue.config.productionTip = false
 
const apps = [
  {
    name: 'vue1',
    entry: '//localhost:8001',
    container: '#vue1',
    id:'vue1',
    activeRule:'/vue1-admin',
    props: {
      appId:'vue1',
      routes: [
        {
          path: '/firstPage1',
          name: 'FirstPage1',
          type:'c',
          component: 'vue1/firstPage/index.vue',
        },
        {
          path: '/secondPage1',
          name: 'SecondPage1',
          type:'c',
          component: 'vue1/secondPage/index.vue',
        },
      ]
    },
    
  },
  {
    name: 'vue2',
    entry: '//localhost:8002',
    container: '#vue2',
    id:'vue2',
    activeRule:'/vue2-admin',
    props: {
      appId:'vue2',
      routes: [
        {
          path: '/firstPage2',
          name: 'FirstPage2',
          type:'c',
          component: 'vue2/firstPage/index.vue',
        },
        {
          path: '/secondPage2',
          name: 'SecondPage2',
          type:'c',
          component: 'vue2/secondPage/index.vue',
        },
      ]
    },
   
  }
]
 
// registerMicroApps(apps);//注册应用
// start();//开启
new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#base-app')