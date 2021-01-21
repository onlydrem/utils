/**
 功能：
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/18 14:55
 **/
import directive from "@/views/permission/directive";

// 批量注册组件示例
let copy, permissionpress

const derective = {
  copy,
  permissionpress
}

export default {
  install(Vue) { // 注册组件
    Object.keys(directives).forEach((key)=>{
      Vue.directive(key, directives[key])
    })
  }
}

 // 在main.js引入 并且
// import Vue from 'vue'
// import Directives from './JS/directives'
// Vue.use(Directives)
