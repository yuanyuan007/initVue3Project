<template>
  <div class="fide_model">
    <Spinner class="pos_center" :class="className" :fadeIn="fadeIn" :noFadeIn="noFadeIn" :name="name" :color="color" />

  </div>
</template>

<script>
import Spinner from 'vue-spinkit'
export default {
  components: {
    Spinner
  },
  props: {
    //	定义使用的图案名称 http://vue-spinkit.surge.sh/
    name: {
      type: String,
      default: 'pacman'
    },
    //定义使用的颜色
    color: {
      type: String,
      default: '#fff'
    },
    className: {
      type: String,
      default: ''
    },
    //定义是否使用fade in效果
    noFadeIn: {
      type: Boolean,
      default: true
    },
    fadeIn: {
      type: String,
      default: 'full' //fade in效果的时间，可以使用full，half， quarter
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.fide_model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.pos_center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>