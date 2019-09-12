import Vue from 'vue';
import Vuex from 'vuex';
import state from './vuex/state';
import {mutations} from './vuex/mutations';
import getters from './vuex/getters';
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  // 	状态
  // 使用username() {
  // 				return this.$store.state.username;
  // 		}
  // this.username=this.$store.state.username
  mutations,
  // 方法
  // 使用this.$store.commit('updateHello', val);
  getters,
  // 计算方法
  // 使用this.$store.getters.doubleCountHello;
});
