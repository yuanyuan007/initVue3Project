import Vue from 'vue';
import Router from 'vue-router';
import routers from './router';
Vue.use(Router)
let route = new Router(
  {
    mode: 'hash',
    routes: routers
  }
);
route.beforeEach((to, from, next) => {
  next();
})
export default route