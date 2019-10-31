import Vue from 'vue';
import loding from './loding';
const lodingBox = Vue.extend(loding);

let instance;
function fining(obj) {
  return {
    propsData: {
      ...obj
    },
    data() { },
    methods: {}
  }
}

Vue.prototype.$ingAnimate = {
  open(obj) {
    instance = new lodingBox(fining(obj))
    instance.$mount();
    document.body.appendChild(instance.$el);
    setTimeout(() => {
      document.body.removeChild(instance.$el);
    }, 2000)
  },
  close() {
    document.body.removeChild(instance.$el);
  }
}

export default loding