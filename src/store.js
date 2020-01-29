import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      //Store the user data in the state
      state.user = userData
      //Store the user data locally to prevent lose the logged status when refresh
      localStorage.setItem('user', JSON.stringify(userData))
      //Set axios header with the user token
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post('//localhost:3000/register', credentials)
                  .then(({ data }) => {
                    commit('SET_USER_DATA', data);
                  })
    }
  }
})
