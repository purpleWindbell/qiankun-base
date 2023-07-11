
<template>
  <div class="main-content">
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <!-- <router-link to="/home">
          <img src="../../assets/logo.png" class="logo" />
        </router-link> -->
      </el-header>
      <el-container>
        <!-- 左侧导航 -->
        <el-aside>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
          >
          <!--基座中可以放自己的路由-->
            <el-menu-item index="/home" @click="handleMenu('home')">
              <i class="el-icon-menu"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <i class="el-icon-menu"></i>
              <span slot="title">About</span>
            </el-menu-item>
            <!--引用其他子应用-->
            <el-menu-item index="vue1" @click="handleMenu('vueApp1')">
              <i class="el-icon-document"></i>
              <span slot="title">qiankun-vue1</span>
            </el-menu-item>
            <el-menu-item index="vue2" @click="handleMenu('vueApp2')">
              <i class="el-icon-setting"></i>
              <span slot="title">qiankun-vue2</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 内容 -->
          <el-main>
              <keep-alive :include="['Home','Vue1']">
                  <router-view></router-view>
              </keep-alive>
            <!--这里就是子应用挂载的节点，跟main.js里面的配置一一对应-->
            <div id="vue1" v-show="activeApp == 'vue1'"></div>
            <div id="vue2" v-show="activeApp == 'vue2'"></div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
 
<script>
var  loadMicroApp = require('qiankun').loadMicroApp
import { start } from "qiankun";
 
export default {
  name: "Main",
  data() {
    return {
      activeApp:'',
      mountedMicropApps:{},
       microApp: [
        {
          name: 'vueApp1',//应用的名字
          entry: '//localhost:8001',//默认会加载这个html解析里面的js动态的执行(子应用必须支持跨域)fetch
          container: '#vue1',//容器名
          id:'vue1',
          activeRule: '/main/vue',//激活的路径
          props: {},
        },
        {
          name: 'vueApp2',//应用的名字
          entry: '//localhost:8002',//默认会加载这个html解析里面的js动态的执行(子应用必须支持跨域)fetch
          container: '#vue2',//容器名
          id:'vue2',
          activeRule: '/main/vue1',//激活的路径
          props: {},
        }
      ]
    }
  },
  created() {
  },
  methods:{
    handleMenu(type){
       let appData = this.microApp.filter(item => item.name == type)[0]
       if(!appData) return 
       this.activeApp = appData.id
       
      if(!this.mountedMicropApps[type]) {
        this.mountedMicropApps[type] = loadMicroApp(appData)
        this.mountedMicropApps[type].mountPromise.then(() => {
          console.log('--->jiazai',);
        })
      }
      else {
        console.log('this.mountedMicropApps[type]====', this.mountedMicropApps[type])
         this.mountedMicropApps[type].update({}).then(() => {
          console.log('--->jiazai1111',);
        })
      }
     
      
      // 加载成功监听
     
    }
  },
  mounted() {
    // if (!window.qiankunStarted) {
    //   window.qiankunStarted = true;
    //   start();
    // }
  },
};
</script>
 