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
    cart: [],
    total: 0
  },
  mutations: {
    updateWallet: (state, payload) => state.wallet = payload,
    updateEmail: (state, payload) => state.email = payload,
    updateToken: (state, payload) => state.token = payload,
    updateTotal: (state, payload) => state.total = payload,
    updateStore: (state, payload) => {
      state.store = payload
    },
    updateCart: (state, payload) => state.cart = payload 
  },
  actions: {
    getStoreItens({ commit, state }) {
      axios.get('http://192.168.0.101:3000/api/v1/product', 
      { headers: { 'X-User-Email': state.email, 
      'X-User-Token' : state.token }})
      .then((response) => {       
        commit('updateStore', response.data)                              
      })
    },
    addToCart({ commit, state }, payload) {
      alert(payload.title)
      if(state.total + payload.price < state.wallet) {
        commit('updateTotal', state.total + payload.price)
        let cartProduct = state.cart
        cartProduct.push(payload)
        state.cart = cartProduct
      }
    },
    buy({ commit, state }) {
      if(state.total< state.wallet) {
        commit('updateWallet', state.wallet - state.total)
        commit('updateTotal', 0)
        commit('updateCart', [])
      }
    }
  }
});
