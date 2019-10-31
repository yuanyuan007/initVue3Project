<template>
  <div class="login_box">
    <div class="title">Sad Mou Du Jiang Qiuxin split two halves</div>
    <div class="form_box">
      <div class="header">
        <div>
          <img src="../assets/login/close.png" alt="">
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="user_header">
        <img src="../assets/login/avtar.png" alt="">
      </div>
      <Vkinput>
        <span slot="left_img">
          <img src="../assets/login/adm.png" alt="">
        </span>
      </Vkinput>
      <Vkinput placeHolder="passWord">
        <span slot="left_img">
          <img src="../assets/login/key.png" alt="">
        </span>
        <span slot="right_img">
          <img src="../assets/login/pass.png" alt="">
        </span>
      </Vkinput>
      <div class="login" @click="goHome">login</div>
    </div>
    <div class="footer">The sky is blue and so on smoke and rain, and I am waiting for you to cook smoke curling up thousands of miles across the river.</div>
  </div>
</template>
<script>
import http from '../api';
import api from '../api/api';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
    }
  },
  watch: {
  },
  created() {
    http(api.text, { id: '1' }).then(res => {
      console.log(res);
    })
    this.setGlobalParams({})
    this.$ingAnimate.open();
  },
  methods: {
    ...mapMutations('login', ['setGlobalParams']),
    getValue(val) {
      console.log(val);
    },
    goHome() {
      this.$router.push({ name: 'about' });
    }
  }
}
</script>
<style lang="less" scoped>
.login_box {
  width: 100%;
  height: 100%;
  background: url("../assets/login/bg1.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    padding: 128px 0 48px 0;
    color: #fff;
    font-size: 36px;
  }
  .footer {
    padding: 28px 0 48px 0;
    color: #fff;
  }
  .user_header {
    display: flex;
    justify-content: center;
    padding: 32px 0;
  }
  .header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    background: #23232e;
    border-radius: 16px 16px 0 0;

    > div:nth-child(1) {
    }

    > div:nth-child(2) {
      display: flex;
      div {
        width: 20px;
        height: 20px;
        margin: 0px 10px 0px 0px;
        border-radius: 50%;
      }
      div:nth-child(1) {
        background: #f1c85f;
      }
      div:nth-child(2) {
        background: #ea569a;
      }
      div:nth-child(3) {
        background: #6756ea;
      }
    }
  }
}
.login {
  padding: 18px 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 30px;
  background: #3ea751;
  margin-top: 54px;
  cursor: pointer;
  border-radius: 0 0 16px 16px;

  &:hover {
    animation: handlyHover 1s;
    animation-fill-mode: forwards;
  }
}
.form_box {
  background: #2b2b36;
  width: 570px;
  border-radius: 16px;
  // overflow: hidden;
}
@keyframes handlyHover {
  from {
    background: #3ea751;
  }
  to {
    background: #ff2775;
  }
}
</style>