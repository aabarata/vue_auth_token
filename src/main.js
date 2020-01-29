import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import { TokenExpiredError } from 'jsonwebtoken'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    //Set the user stored locally in the store state
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData);
    }
    //Security mesure to prevent setting user with fake token manually at the local storage
    axios.interceptors.response.use(
      response => response, 
      error => {
        if(error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
