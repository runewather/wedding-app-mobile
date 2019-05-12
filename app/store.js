import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wallet: 0,
  },
  mutations: {
    setWallet: (state, val) => state.wallet = val,
  },
  actions: {

  }
});
