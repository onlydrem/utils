/**
 功能：存储处理
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/5
 **/
/**
 * 清空全部localStorage
 */
import Cookies from 'js-cookie'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export const clearStore = (params = {}) => {
  let { type } = params;
  if (type) {
    window.sessionStorage.clear();
  } else {
    window.localStorage.clear()
  }

}
