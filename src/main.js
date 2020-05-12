import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Vuex from 'vuex';

Vue.config.productionTip = false

// const store = new Vuex.store({

// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
