<template>
  <div class="input_box">
    <div class="left_img">
      <slot name="left_img"></slot>
    </div>
    <div class="input" name="input">
      <input type="text" :placeholder="placeHolder" :value="value" @input="setValue">
    </div>
    <div>
      <slot name="right_img"></slot>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    placeHolder: {
      type: String,
      default: 'Username'
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {

  },
  data() {
    return {}
  },
  methods: {
    setValue(e) {
      this.$emit('change', e.target.value);
    }
  }
}
</script>
<style lang="less" scoped>
.input_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 5px 14px 0;
  border-bottom: 1px solid #484856;
  .left_img {
    margin-right: 15px;
    margin-left: 8px;
  }
  .input {
    flex: 1;
    input {
      color: #9199aa;
      font-size: 18px;
      outline: none;
      border: none;
      background: none;
      width: 100%;
    }
  }
}
</style>