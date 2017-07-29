import Vue from 'vue'
import Vuex from 'vuex'
// import * as mutations from './mutations'
// import * as actions from './actions'
import user from './modules/user'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user
  },
  // actions,
  strict: debug
})
