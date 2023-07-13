<!--
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 14:31:29
 * @LastEditTime: 2023-07-13 16:04:42
-->
<template>
  <div id="base-app" class="base-css">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <!-- <router-view  /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#base-app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
