/**
 功能：
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/18 14:35
 **/
function  checkArray(key) {
  let arr = ['1', '2', '3', '4', '5']

  let index = arr.indexOf(key)
  if(index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}

const permission = {
  inserted: function (el, binding) {
    let permission = binding.value // 获取v-permission的值
    if(permission) {
      let hasPermission = checkArray(permission)
      if(!hasPermission) {
        // 没有权限 移除dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

export default  permission

// <div class="btns">
//   <!-- 显示 -->
//   <button v-permission="'1'">权限按钮1</button>
//   <!-- 不显示 -->
//   <button v-permission="'10'">权限按钮2</button>
//   </div>
