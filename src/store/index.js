import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    bracketOneWinner: null,
    bracketTwoWinner: null
  },
  mutations: {
    updateUser (state, u) {
      state.user = u
    },
    setBracketOneWinner (state, t) {
      state.bracketOneWinner = t
    },
    setBracketTwoWinner (state, t) {
      state.bracketTwoWinner = t
    }
  }
})
