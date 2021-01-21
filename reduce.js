
/**
 功能：
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/14
 **/

// 数组对象去重
function distinct1 (arr, key) {
  var newobj = {}, newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!newobj[item[key]]) {
      newobj[item[key]] = newArr.push(item);
    }
  }
  return newArr;
}

// 数组去重 json.stringify去重
function rempveDuplicate(arr) {
  let map = new Map()
  arr.forEach(item=> {
    map.set(JSON.stringify(item), item)
  })
  return [...map.values()]
}

// 获取数据类型
const getType = (function () {
  const clsee2type = {'[object Boolean]' : 'boolean', '[object Number]': 'number','[object String]': 'string', '[object Function]': 'function', '[object Array]': 'array', '[object Date]': 'date', '[object Regexp]': 'regexp', '[object Object]': 'object', '[object Error]': 'error', '[object Symbol]': 'symbol' }
  return function getType(obj) {
    if(obj ==null) {
      return obj + ''
    }
    const str = Object.prototype.toString.call(obj)
    return typeof obj === 'object' || typeof obj === 'function' ? class2type[str] ||  'object': typeof obj
  }
})()

function isEqual(o1, o2) {
  const t1= getType(o1)
  const t2= getType(o2)

  if(t1 !== t2) return false

  if(t1 === 'array') {
    if(o1.length !== o2.length) return false

    return o1.every((item,i)=> {
      return isEqual(item, o2[i])
    })
  }
  if(t2 === 'object') {
    const keysArr = Object.keys(o1)
    if(keysArr.length!== Object.keys(o2).length) return false
    return  keysArr.every(k=> {
      return isEqual(o1[k], o2[k])
    })
  }
  return o1 === o2
}

// 数组去重 (对象去重)
function  removeDuplicate2(arr) {
  return arr.reduce((isEqualArr, current)=> {
    const hasIndex = isEqualArr.findIndex(item=> isEqual(current, item))
    if(hasIndex === -1) {
      isEqualArr.push(current)
    }
    return isEqualArr
  }, [])
}

// indexOf去重
function subscriptEqual(arr) {
  const newArr = []
  for(let i = 0; i<arr.length; i++) {
    if(arr.indexOf(arr[i])===i) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// set 去重
function unique(arr) {
  return [...new Set(arr)]
}
function unique2(arr) {
  return Array.from(new Set(arr))
}

// 并集去重
function andUnique(arr, arr2) {
  return new Set([...arr, ...arr2])
}
// 交集去重
function orUnique(arr, arr1) {
  return new Set([...arr].filter(x=>arr1.has(x)))
}
// 差集去重
function  diffUnique(arr, arr1) {
  return new Set([...arr].filter(x=>!arr1.has(x)))
}

// 双重for遍历去重  hasOwnProperty()方法去重
