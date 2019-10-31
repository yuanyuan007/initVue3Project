import Axios from 'axios';
import store from '../store';
import Vue from 'vue';
import router from '../router';
// import { Message } from 'element-ui';
// 请求拦截器
const animateUrl = ['TestController/findName', 'customer/insertCustomer', 'customerUpdateCustomer'] // 需要添加加载动画的数组
Axios.defaults.withCredentials = true;
Axios.interceptors.request.use((config) => {
  animateUrl.forEach(item => {
    if(config.url.match(item)) {
      Vue.prototype.$ingAnimate.open();
    }
  })
  return config;
}, (error) => {
  console.log(error);
});

// 响应拦截器
Axios.interceptors.response.use((config) => {

  if(config.status === 200 && config.data.result.errcode === "0000") {
    animateUrl.forEach(item => {
      if(config.config.url.match(item)) {
        Vue.prototype.$ingAnimate.close();
      }
    })
    return config.data.result.data;
  } else {
    return checkoutStatus(config);
  }

}, (error => {
  Message.error('服务不稳定，请稍后再试');
  return Promise.reject(error);
}))

function checkoutStatus(config) {
  switch(config.data.result.errcode) {
    case '800002':
      // Message.error('您还未登录');
      router.push('/');
      break;
    case '0021':
      return { code: '0021', msg: '客户余额不足,请确认是否下单' };
    case '0022':
      return { code: '0022', msg: '客户信用额度不足,请确认是否下单' };
    case '0032':
      return { code: '0032', msg: '客户余额不足,请确认是否更新订单' }
    case '0033':
      return { code: '0033', msg: '客户信用额度不足，请确认是否更新订单' }
    default:
      // Message.error(config.data.message);
      break;
  }
  return false;
}

let header = {
  // token: store.state.login.token,
  // memberId: store.state.login.memberId,
  // roleId: store.state.login.roleId,
  // cookie: store.state.login.cookie

};
function setParameter(url, data) {
  var methods = url.method === 'get' ? 'params' : 'data';
  return {
    url: url.url,
    method: url.method ? url.method : 'post',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8',
      // ...header
    },
    [methods]: data ? data : {},
    timeout: 50000,
  }
}

function http(url, data) {
  return new Promise((resolve, reject) => {
    let res_ = setParameter(url, data);
    Axios(res_).then(res => {
      if(res !== false) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch(ret => {
      reject(ret);
    })
  })
}

export default http;
