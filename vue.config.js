/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 15:59:45
 * @LastEditTime: 2023-06-30 16:01:43
 */

module.exports = {
    lintOnSave:false,//关闭eslint检测
    devServer:{
      port:8000,//这里的端口必须和父应用配置的子应用端口一致
      headers:{
        //因为qiankun内部请求都是fetch请求资源，所以子应用必须允许跨域
        'Access-Control-Allow-Origin':'*',
      }
    },
    configureWebpack:{
      output:{
        //资源打包路径
        library:'base',
        libraryTarget:'umd'
      }
    }
} 