<template>
  <div class="main-content">
    <el-container>
        <el-aside>
          <el-menu default-active="2"  class="el-menu-vertical-demo" :default-active="activeMenu" background-color="#545c64"   text-color="#fff" :router="true">
            <el-menu-item index="/home" @click="handleMenu('home')">
              <i class="el-icon-menu"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>vue1目录</span>
              </template>
              <!-- <router-link to="/vue1-admin/firstPage"> -->
                 <el-menu-item index="/vue1-admin/firstPage1" >
                  <i class="el-icon-document"></i>
                  <span slot="title">vue1第一个页面</span>
                </el-menu-item>
              <!-- </router-link> -->
             
               <el-menu-item index="/vue1-admin/secondPage1" >
                <i class="el-icon-document"></i>
                <span slot="title">vue1第二个页面</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>vue2目录</span>
              </template>
              <el-menu-item index="/vue2-admin/firstPage2" >
                <i class="el-icon-document"></i>
                <span slot="title">vue2第一个页面</span>
              </el-menu-item>
               <el-menu-item index="/vue2-admin/secondPage2" >
                <i class="el-icon-document"></i>
                <span slot="title">vue2第二个页面</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
              <!-- <keep-alive :include="['Home','Vue1']"> -->
                  <router-view></router-view>
              <!-- </keep-alive> -->
            <!--第一种模式去掉v-show-->
            <div id="vue1" ></div>
            <div id="vue2" ></div>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>
 
<script>
var  loadMicroApp = require('qiankun').loadMicroApp
 
export default {
  name: "Main",
  data() {
    return {
     activeMenu:'',
      activeApp:'',
      mountedMicropApps:{},
       microApp: [
        {
          name: 'vue1',//应用的名字
          entry: '//localhost:8001',//默认会加载这个html解析里面的js动态的执行(子应用必须支持跨域)fetch
          container: '#vue1',//容器名
          id:'vue1',
          props: {
            appId: 'vue1',
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
          props: {
            appId: 'vue2',
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
    }
  },
  
  watch:{
    $route:{
      immediate:true, // 保证刷新也会触发
      deep:true,
      handler(val) {
        let type = val.meta.label
        this.activeMenu = val.path
        this.handleMenu(type)
      }
    }
  },
  methods:{
    handleMenu(type){
       let appData = this.microApp.filter(item => item.name == type)[0]
       if(!appData) return 
       this.activeApp = appData.id
      if(!this.mountedMicropApps[type]) {
        this.mountedMicropApps[type] = loadMicroApp(appData)
        this.mountedMicropApps[type].mountPromise.then(() => {
          console.log('--->成功加载子系统',);
        })
      }
      else {
         this.mountedMicropApps[type].update({}).then(() => {
          console.log('--->更新子系统',this.activeApp);
        })
      }
    }
  },
};
</script>

<style scoped lang="scss">
.main-content {
  height: 100vh;
  /deep/ .el-aside {
    width: 200px  !important;
    background-color: #545C64;
  }
  /deep/ .el-container {
    height: 100%;
  }
}
</style>
 