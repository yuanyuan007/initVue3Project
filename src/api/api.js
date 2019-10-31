let api = {
  text: {
    url: 'TestController/findName',
    method: 'get'
  }
};
//生产环境判断
// development

if(process.env.NODE_ENV === 'production') {
  Object.keys(api).forEach(item => {
    api[item] = 'http://47.103.31.116:8080/blog/' + api[item];
  })
} else {
  Object.keys(api).forEach(item => {
    api[item]['url'] = '/api/' + api[item]['url'];
  })
}

export default api;