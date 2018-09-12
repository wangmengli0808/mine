import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  isLoading: false,
  color: '#C93282'
};

const action = {
  commitLoading:({ commit }, isLoading) => commit('setLoading', isLoading)
};

const mutations = {
  setLoading(state, data) {
    state.isLoading = data;
  },
  changeColor(state, data) {
    state.color = data;
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  action,
  mutations
})