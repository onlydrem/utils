/**
 功能：拦截器
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/7
 **/

import axios from "axios";
import { Message } from "element-ui";
import store from "../../store";
import { getToken, setToken, removeToken } from "@u/auth";

let pending = [] // 初始化一个数组用于存储每个请求的取消函数和axios标识
let cancelToken = axios.CancelToken
let removePending = (config) => {
  for (let k in pending) {
    // 当当前请求在数组中存在时执行函数体
    if(pending[k].u === config.url + '&' + config.method) {
      pending[k].f() // 执行取消函数
      pending.splice(k, 1)
    }
  }
}
 function getLocalToken (){ // 拿到现有的token
  const token = localStorage.getItem('token')
   return token
 }


const httpRequest = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false,
  // timeout: 5000
});

httpRequest.interceptors.request.use(
  config => {
    config.headers["Authorization"] = 'Bearer ' + getLocalToken()
    config.headers["area"] = 'lianyungang'
    // 在一个axios 发送前执行一下取消操作
    removePending(config)
    config.cancelToken = new cancelToken((c)=> {
      // 这里axios标识是永请求地址&请求当时拼接的字符串
      pending.push({u: config.url + JSON.stringify(config.data) + '&' + config.method, f: c});
    });
    // return config;
    return Promise.resolve(config)
  },
  error => {
    return Promise.reject(error)
  }
);

httpRequest.interceptors.response.use(
  response => {
    removePending(response.config)
    // return response
    return Promise.resolve(response)
  },
  error => {
    if (error.response.data.msg == null) {
      Message({
        message: '【未知异常】',
        type: "error",
        duration: 2 * 1000
      });
    } else {
      Message({
        message: error.response.data.msg,
        type: "error",
        duration: 2 * 1000
      });
    }
    return Promise.reject(error)
  }
);

const get = (url, params = {}) => {
  return new Promise(resolve => {
    httpRequest
      .get(url, { params: params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err)
      });
  });
};

const post = (url, params = {}) => {
  return new Promise(resolve => {
    httpRequest
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err)
      });
  });
};
const del = (url, params = {}) => {
  return new Promise(resolve => {
    httpRequest
      .delete(url, { params: params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err)
      });
  });
};

const put = (url, params = {}) => {
  return new Promise(resolve => {
    httpRequest
      .put(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err)
      });
  });
};

export { httpRequest, get, post, del, put };

