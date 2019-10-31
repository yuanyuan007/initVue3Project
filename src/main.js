import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import components from './components/extendComponent/index';
// 使用 CSS
Vue.config.productionTip = false
Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()); //首字母大写
  Vue.component(`${name}`, components[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
