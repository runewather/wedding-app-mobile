import Vue from 'nativescript-vue'
import Home from './components/Home'
import Login from './components/Login'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  store,
  render: h => h('frame', [h(Login)])
}).$start()
