import { getSen, setSen } from '../../uilis'
const state = {
  token: '' || getSen('token'),
  memberId: '' || getSen('memberId'),
  roleId: '' || getSen('roleId')
}

const getters = {
  getToken: state => state.token
}

const mutations = {
  setGlobalParams(state, data) {
    Object.keys(data).forEach(item => {
      state[item] = data[item];
      setSen(item, state[item]);
    })
  }
}
const actions = {}


export default {
  namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
};