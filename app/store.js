import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

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
      if(state.total + payload.price < state.wallet) {
        commit('updateTotal', state.total + payload.price)
        let cartProduct = state.cart
        payload.id = generateUID()
        cartProduct.push(payload)
        state.cart = cartProduct  
        commit('updateCart', cartProduct)  
      }
    },
    removeProductFromCart({ commit, state }, payload) {      
      let price = 0
      let cartItens
      if(state.cart.length > 1) {
          cartItens = state.cart.filter(p => {
          if(p.id != payload.id) {
            price = p.price
          }
          return p.id != payload.id
        })
        commit('updateTotal', state.total - price)
      } else {
        commit('updateTotal', 0)
      }
      
      commit('updateCart', cartItens)
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
