import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
    token: '',
    wallet: 0,
    store: [],
    cart: []
  },
  mutations: {
    updateWallet: (state, payload) => state.wallet = payload,
    updateEmail: (state, payload) => state.email = payload,
    updateToken: (state, payload) => state.token = payload,
    updateStore: (state, payload) => {
      state.store = payload
    },
    addToCart: (state, payload) => {
      let cartProduct = state.cart
      cartProduct.push(payload)
      state.cart = cartProduct
    }
  },
  actions: {
    getStoreItens({ commit, state }) {
      axios.get('http://192.168.0.101:3000/api/v1/product', 
      { headers: { 'X-User-Email': state.email, 
      'X-User-Token' : state.token }})
      .then((response) => {       
        commit('updateStore', response.data)                              
      })
    }
  }
});
