/**
 功能：
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/18 14:46
 **/


const debounce = {
  inseted: function (el, binding) {
    let timer
    el.addEventListener('keyup', ()=> {
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=> {
        binding.value()
      }, 1000)
    })
  }
}

export  default  debounce

// 使用
// <template>
// <button v-debounce="debounceClick">防抖</button>
//   </template>
//
//   <script>
// export default {
//   methods: {
//     debounceClick () {
//       console.log('只触发一次')
//     }
//   }
// }
