import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
    token: '',
    wallet: 0,
  },
  mutations: {
    updateWallet: (state, payload) => state.wallet = payload,
    updateEmail: (state, payload) => state.email = payload,
    updateToken: (state, payload) => state.token = payload
  },
  actions: {

  }
});
