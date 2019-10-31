import Axios from 'axios';
import store from '../store';
// 请求拦截器
Axios.interceptors.request.use((config) => {
  // console.log(config);
  return config;
}, (error) => {
  console.log(error);
});

// 响应拦截器

Axios.interceptors.response.use((config) => {
  // console.log(config.data);
  if(config.status === 200 && config.data.resultCode == "000000") {
    return config.data.name;
    // return config.data.data; 
  } else {
    checkoutStatus(config);
    return false;
  }
}, (error => {
  return Promise.reject(error);
}))

function checkoutStatus(config) {
  console.log(config.data.message.userMsg);
}

let header = {
  token: store.state.login.token,
  memberId: store.state.login.memberId,
  roleId: store.state.login.roleId
};
function setParameter(url, data) {
  var methods = url.method === 'get' ? 'params' : 'data';
  return {
    url: url.url,
    method: url.method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8',
      // ...header
    },
    [methods]: data,
    timeout: 5000,
  }

}

function http(url, data) {
  return new Promise((resolve, reject) => {
    Axios(setParameter(url, data)).then(res => {
      resolve(res);
    }).catch(ret => {
      reject(ret);
    })
  })
}

export default http;
